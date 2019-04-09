import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NavigationServices from '../navigator/NavigationServices';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => NavigationServices.navigate('Another')}>
          Go to Another screen
        </Text>
      </View>
    );
  }
}

export default WelcomeScreen;
