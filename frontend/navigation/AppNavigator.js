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
import MapPage from '../screens/Map.js';
import Magasine from '../screens/Article.js'
import HomePage from '../screens/Home.js'
import  Profile  from '../screens//Profil.js';
import Notifications from '../screens/Notifications.js';
import Language from '../screens/Language.js';
import EditProfile from '../screens/EditProfile.js';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Page" screenOptions={{ headerShown: false }}>
<Stack.Screen name='welcome' component={HomeScreen} />
      <Stack.Screen name='Onbording' component={Onbording} />
      <Stack.Screen name='Onbording2' component={Onbording2} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="EditProfile" component={EditProfile} />

      <Stack.Screen name='Map' component={Map} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Scanner" component={ScannerScreen} />
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

function Article({ navigation }) {
  return (
    <>
      <Magasine/>
      <TabBar navigation={navigation} />
    </>
  );
}

function Home({ navigation }) {
  return (
    <>
      <HomePage/>
      <TabBar navigation={navigation} />
    </>
  );
}
function Map({ navigation }) {
  return (
    <>
      <MapPage/>
      <TabBar navigation={navigation} />
    </>
  );
}
function Profil({ navigation }) {
  return (
    <>
      <Profile/>
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