import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import Store from './src/Redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

export default App;
