
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './src/stores/create';
import Root from './src';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Root />
      </View>
    </Provider>
  );
};

export default App;