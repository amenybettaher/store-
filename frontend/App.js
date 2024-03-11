
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { UserProvider } from './screens/UserContext'

const App = () => {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
