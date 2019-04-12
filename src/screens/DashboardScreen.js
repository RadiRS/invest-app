import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/header';
import Icon from '../components/icons/CustomIcon';
import MenuDashboard from '../components/menu';
import InfoDashboard from '../components/info';
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
        <ScrollView>
          <UserSection>
            <UserWrapper>
              <Text>Welcome </Text>
              <User>Adjie, </User>
              <Icon name="verified" size={24} color={Colors.lightGreen} />
            </UserWrapper>
            <Text>Dana tersedia</Text>
            <Dana>Rp 100.900.000</Dana>
          </UserSection>

          <MenuSection>
            <MenuDashboard />
          </MenuSection>

          <InfoSection>
            <InfoDashboard />
            <InfoDashboard />
            <InfoDashboard />
            <InfoDashboard />
          </InfoSection>
          {/* <ContentContainer>
            
          </ContentContainer> */}
        </ScrollView>
      </Container>
    );
  }
}

export default WelcomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const UserSection = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.snow};
`;

const MenuSection = styled.View`
  top: -30;
  position: relative;
  width: 100%;
`;

// const ContentContainer = styled.View`
//   flex: 1;
//   background-color: red;
// `;

const InfoSection = styled.View`
  position: relative;
  top: -30;
  flex: 1;
  padding: 0 10px;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${Colors.background};
`;

const User = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

const Text = styled.Text`
  font-size: 18px;
`;

const Dana = styled.Text`
  font-size: 34px;
  margin-bottom: 30px;
  color: ${Colors.primary};
`;
