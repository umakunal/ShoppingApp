import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import Store from './src/Redux/store';
import {Provider} from 'react-redux';
import Router from './src/Router/Router';
const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default App;
