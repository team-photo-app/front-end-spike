import React from 'react';
import { Image, View } from 'react-native';

class Puppy extends React.Component {
  render() {
    return (
      <View > 
        <Image
          style={{resizeMode: 'cover'}}
          source={require('../../../assets/icon.png')}
        />
      </View>
    );
  }
}

export default Puppy;
