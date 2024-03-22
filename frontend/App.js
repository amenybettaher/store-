import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import { Platform, View } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';





const backEndUrl = 'http://192.168.1.101:8000'; // TOCHANGE backEndUrl
const notificationUpdateInterval = 4000; // TOCHANGE in ms
let lastNotification = {title: "Hi", body: "Thank you"};


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // run schedulePushNotification every  4sec
    const interval = setInterval(schedulePushNotification, notificationUpdateInterval); //TOCHANGE  make it 
    registerBackgroundFetchAsync();

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

async function schedulePushNotification() {

  // get /notification body and parse it
  const response = await fetch(backEndUrl + '/get-notification');
  const dataNotification = await response.json();

  if(lastNotification.title == dataNotification.title && lastNotification.body == dataNotification.body)return;
  lastNotification = dataNotification;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: dataNotification.title,
      body: dataNotification.body,
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });
} 



const BACKGROUND_FETCH_TASK = 'background-fetch-task-hiba';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const response = await schedulePushNotification();
});

export async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 10, // 1 minute
  });
}