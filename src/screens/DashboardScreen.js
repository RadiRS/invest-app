import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import NavigationServices from '../navigator/NavigationServices';
import Header from '../components/header';
import { Colors } from '../themes';

class WelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />
  });

  componentDidMount() {
    StatusBar.setBackgroundColor(Colors.lightGray, true);
  }

  render() {
    return (
      <Container>
        <Text onPress={() => NavigationServices.navigate('Another')}>
          Go to Another screen
        </Text>
        <ContentContainer>
          <ScrollView>
            <UserSection />
            <InfoSection />
          </ScrollView>
        </ContentContainer>
      </Container>
    );
  }
}

export default WelcomeScreen;

const Container = styled.View``;

const Text = styled.Text``;

const ContentContainer = styled.View``;

const UserSection = styled.View``;

const InfoSection = styled.View``;
