import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../themes';
import Marketplace from '../components/marketplace';
import DetailBorrow from '../components/detailmarketplace/DetailBorrow';
import DetailBorrower from '../components/detailmarketplace/DetailBorrower';
import DetailHistory from '../components/detailmarketplace/DetailHistory';

class DetailMarketplaceScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    // header: null
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

const DetailInfoSection = styled.View``;
