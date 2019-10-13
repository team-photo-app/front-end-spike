import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from './src/store/store';
import Counter from './src/components/Counter/Counter';
import SignUp from './src/components/SignUp/SignUp';
import Puppy from './src/components/Image/Image';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{
        padding: 20
      }}>
        <SignUp />
        <View style={{margin:10}}>
          <Counter />
        </View>
        <Puppy />
      </View>
    </Provider>
  );
}

