
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import Page from '../screens/Page.js';
import Onboridng from '../screens/Onbording.js';
import Onboridng2 from '../screens/Onbording2.js';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
      {/* <Stack.Screen name='we' component={Page} /> */}
      <Stack.Screen name='Abdelhak Barbouche ' component={Onboridng} />

        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}