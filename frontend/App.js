import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import registerNNPushToken from 'native-notify';

export default function App() {
  registerNNPushToken(20289, 'JfbP2UDjztgrhHJdEPIZ9W');
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
