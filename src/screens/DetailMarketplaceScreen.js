import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../themes';
import Marketplace from '../components/marketplace';
import DetailBorrow from '../components/detailmarketplace/DetailBorrow';
import DetailBorrower from '../components/detailmarketplace/DetailBorrower';
import DetailHistory from '../components/detailmarketplace/DetailHistory';

class DetailMarketplaceScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Microsoft Office 2019',
    headerTitleStyle: {
      color: Colors.primary
    },
    headerTitleContainerStyle: {
      marginLeft: -20
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-arrow-round-back" size={24} color={Colors.primary} />
      </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
      paddingLeft: 20
    }
  });

  state = {
    selected: 'borrow'
  };

  handlePressInfo = value => {
    this.setState({
      selected: value
    });
  };

  renderDetailInfo = () => {
    const { selected } = this.state;
    let detail;

    if (selected === 'borrow') detail = <DetailBorrow />;

    if (selected === 'borrower') detail = <DetailBorrower />;

    if (selected === 'history') detail = <DetailHistory />;

    return detail;
  };

  render() {
    const { selected } = this.state;

    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MarketPlaceSection>
            <Marketplace />
          </MarketPlaceSection>

          <MenuSection>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Menu
                onPress={() => this.handlePressInfo('borrow')}
                style={{
                  borderBottomColor: Colors.primary,
                  borderBottomWidth: selected === 'borrow' ? 5 : null
                }}
              >
                <LabelMenu>Detail Pinjaman</LabelMenu>
              </Menu>
              <Menu
                onPress={() => this.handlePressInfo('borrower')}
                style={{
                  borderBottomColor: Colors.primary,
                  borderBottomWidth: selected === 'borrower' ? 5 : null
                }}
              >
                <LabelMenu>Informasi Peminjam</LabelMenu>
              </Menu>
              <Menu
                onPress={() => this.handlePressInfo('history')}
                style={{
                  borderBottomColor: Colors.primary,
                  borderBottomWidth: selected === 'history' ? 5 : null
                }}
              >
                <LabelMenu>Riwayat Pinjaman</LabelMenu>
              </Menu>
            </ScrollView>
          </MenuSection>

          <DetailInfoSection>{this.renderDetailInfo()}</DetailInfoSection>
        </ScrollView>

        <Footer>
          <Button>
            <LabelButton>Beri Pendanaan</LabelButton>
          </Button>
        </Footer>
      </Container>
    );
  }
}

export default DetailMarketplaceScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

const MarketPlaceSection = styled.View`
  flex: 1;
  margin: 0 -10px;
  margin-top: 20px;
`;

const MenuSection = styled.View`
  flex-direction: row;
  background-color: ${Colors.snow};
  padding: 0 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${Colors.background};
`;

const Menu = styled.TouchableOpacity`
  padding: 20px 10px;
`;

const LabelMenu = styled.Text`
  font-size: 20px;
`;

const DetailInfoSection = styled.View`
  margin-bottom: 130px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  border-top-width: 2px;
  border-top-color: ${Colors.background};
  background-color: ${Colors.snow};
`;

const Button = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 5px;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

const LabelButton = styled.Text`
  font-size: 20px;
  color: ${Colors.snow};
`;
