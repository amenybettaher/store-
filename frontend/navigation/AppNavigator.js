import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import Page from '../screens/Page';
import Onbording2 from '../screens/Onbording2.js';
import SignUp from '../screens/SignUp';
import Onbording from '../screens/Onbording.js';
import Scannerscreen from '../screens/ScannerScreen.js';
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
import AboutUs from '../screens/AboutUs.js';import Wallet from '../screens/Wallet.js';
import Carte from '../screens/Carte.js';



const Stack = createStackNavigator();

function MainStack({ language }) {
  return (

    <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
<Stack.Screen name='welcome' component={Page} />
      <Stack.Screen name='Onbording' component={Onbording} />
      <Stack.Screen name='Onbording2' component={Onbording2} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} /> 
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name='Map' component={Map} />
      <Stack.Screen name='Card' component={Card} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="ScannerScreen" component={ScannerScreen} initialParams={{ language }} />
      <Stack.Screen name="Wallet" component={Walleti} />
    </Stack.Navigator>
  );
}

// function HomeScreenWithTabBar({ route, navigation }) {
//   return (
//     <>
//       <HomeScreen language={route.params.language} />
//       <TabBar navigation={navigation} />
//     </>
//   );
// }

function ScannerScreen({ route, navigation }) {
  return (
    <>
      <Scannerscreen language={route.params.language} />
      <TabBar navigation={navigation} />
    </>
  );
}

function Article({ route, navigation }) {
  return (
    <>
      <Magasine  />

      {/* <Magasine language={route.params.language} /> */}
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
      <HomePage/>
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
function Card({ navigation }) {
  return (
    <>
      <Carte />
      <TabBar navigation={navigation} />
    </>
  );
}

export default function AppNavigator({ language }) {
  return (
    <NavigationContainer>
      <MainStack language={language} />
    </NavigationContainer>
  );
}