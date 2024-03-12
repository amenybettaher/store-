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
import Magasine from '../screens/Article.js';
import HomePage from '../screens/Home.js';
import Profile from '../screens/Profil.js';
import Notifications from '../screens/Notifications.js';
import Language from '../screens/Language.js';
import EditProfile from '../screens/EditProfile.js';
import ContactUs from '../screens/ContactUs.js';
import PrivacyPolicy from '../screens/PrivacyPolicy.js';
import { Card } from 'react-native-elements';
import Carte from '../screens/Carte.js';
import Wallet from '../screens/Wallet.js';
const Stack = createStackNavigator();

function MainStack({ language }) {
  return (
    <Stack.Navigator initialRouteName="Wallet" screenOptions={{ headerShown: false }}>
      <Stack.Screen name='welcome' component={Page} />
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name='Map' component={Map} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="HomeScreen" component={HomeScreenWithTabBar} />
      <Stack.Screen name="Scanner" component={ScannerScreenWithTabBar} />
      <Stack.Screen name="Carte" component={Carte} />
      <Stack.Screen name="Wallet" component={Walleti} />
    </Stack.Navigator>
  );
}

function HomeScreenWithTabBar({ route, navigation }) {
  return (
    <>
      <HomeScreen />
      <TabBar navigation={navigation} />
    </>
  );
}

function ScannerScreenWithTabBar({ route, navigation }) {
  return (
    <>
      <ScannerScreen />
      <TabBar navigation={navigation} />
    </>
  );
}

function Article({ route, navigation }) {
  return (
    <>
      <Magasine />
      <TabBar navigation={navigation} />
    </>
  );
}
function Walleti({ route, navigation }) {
  return (
    <>
      <Wallet />
      <TabBar navigation={navigation} />
    </>
  );
}

function Home({ navigation }) {
  return (
    <>
      <HomePage />
      <TabBar navigation={navigation} />
    </>
  );
}
function Map({ navigation }) {
  return (
    <>
      <MapPage />
      <TabBar navigation={navigation} />
    </>
  );
}
function Profil({ navigation }) {
  return (
    <>
      <Profile />
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