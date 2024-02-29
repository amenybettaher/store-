
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SignUp from '../screens/SignUp';
import Article from '../screens/Article'

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Article">
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        <Stack.Screen name="Article" component={Article} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}