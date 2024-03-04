import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import Page from '../screens/Page';
import Onbording2 from '../screens/Onbording2.js';
import SignUp from '../screens/SignUp';
import Onbording from '../screens/Onbording.js';
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen.js';
import TabBar from '../screens/TabBar.js';
import Article from '../screens/Article.js'
import Profile from '../screens/Profil.js';
import Notifications from '../screens/Notifications.js';
import EditProfile from '../screens/EditProfile.js';
import Language from '../screens/Language.js';
//import Map from '../screens/Map.js';
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Page" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Profile' component={Profile} />
             <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='Notifications' component={Notifications} />
            <Stack.Screen name='Language' component={Language} />


      {/* <Stack.Screen name='w' component={Map} /> */}
      {/* <Stack.Screen name='welcome' component={Page} /> */}
      {/* <Stack.Screen name='Onbording' component={Onbording} /> */}
      {/* <Stack.Screen name='Onbording2' component={Onbording2} /> */}
      {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      {/* <Stack.Screen name="Article" component={Article} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreenWithTabBar} /> */}
      {/* <Stack.Screen name="Scanner" component={ScannerScreenWithTabBar} /> */}
    </Stack.Navigator>
  );
}

function HomeScreenWithTabBar({ navigation }) {
  return (
    <>
      <HomeScreen />
      <TabBar navigation={navigation} />
    </>
  );
}

function ScannerScreenWithTabBar({ navigation }) {
  return (
    <>
      <ScannerScreen />
      <TabBar navigation={navigation} />
    </>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}