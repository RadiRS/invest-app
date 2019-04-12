import React, { Component } from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/header';
import Icon from '../components/icons/CustomIcon';
import MenuDashboard from '../components/menu';
import InfoDashboard from '../components/info';
import MarketPlace from '../components/marketplace';
import { Colors } from '../themes';

class WelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />
  });

  componentDidMount() {
    StatusBar.setBackgroundColor(Colors.lightGray, true);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            <InfoDashboard
              iconName="savings"
              labelInfo="Profit Diterima"
              textInfo="100.000.000"
            />
            <InfoDashboard
              iconName="investment-model"
              labelInfo="Dana Teralokasi"
              textInfo="100.000.000"
            />
            <InfoDashboard
              iconName="wallet"
              labelInfo="Nilai Akun"
              textInfo="100.000.000"
            />
            <InfoDashboard
              iconName="money"
              labelInfo="Proyeksi Profit"
              textInfo="100.000.000"
            />
          </InfoSection>

          <DividerSection>
            <Border />
            <Text>Peluang Terbaik</Text>
          </DividerSection>

          <MarketPlaceSection>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMarketplace')}
            >
              <MarketPlace />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMarketplace')}
            >
              <MarketPlace />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailMarketplace')}
            >
              <MarketPlace />
            </TouchableOpacity>
          </MarketPlaceSection>
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

const MarketPlaceSection = styled.View`
  position: relative;
  top: -30;
  flex: 1;
  padding: 0 10px;
  padding-top: 20px;
`;

const DividerSection = styled.View`
  position: relative;
  top: -20;
  padding: 0 20px;
  flex-direction: row;
`;

const Border = styled.View`
  border-radius: 5px;
  border-width: 3px;
  background-color: ${Colors.darkBlue};
  border-color: ${Colors.darkBlue};
  margin-right: 10px;
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
