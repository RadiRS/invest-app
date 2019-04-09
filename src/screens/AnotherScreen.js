import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NavigationServices from '../navigator/NavigationServices';

class AnotherScreen extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => NavigationServices.navigate('Welcome')}>
          Got Welcome Screen
        </Text>
      </View>
    );
  }
}

export default AnotherScreen;
