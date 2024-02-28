// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page from '../screens/Page';
import Onbording2 from '../screens/Onbording2';
import SignUp from '../screens/SignUp'
import Onbording from '../screens/Onbording';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
        <Stack.Screen name='Page1' component={Page} />
                <Stack.Screen name='Onbording' component={Onbording} />
                <Stack.Screen name='Onbording2' component={Onbording2} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
