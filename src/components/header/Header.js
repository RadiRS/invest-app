import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import styled from 'styled-components';
import Icon from '../icons/CustomIcon';
import { Colors, Metrics } from '../../themes';
import Logo from '../logo';

export class Header extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <HeaderTitle>
          <Logo style={{ width: 200 }} />
        </HeaderTitle>
        <MenuWrapper>
          <Notification onPress={() => alert('Notif')}>
            <Icon name="notification-tilted" color={Colors.primary} size={30} />
          </Notification>
          <MenuBar
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Icon name="humberger_menu" color={Colors.primary} size={40} />
          </MenuBar>
        </MenuWrapper>
      </Container>
    );
  }
}

export default Header;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.snow};
  padding: 20px 20px;
  height: ${Metrics.navBarHeight};
`;

const HeaderTitle = styled.View``;

const MenuWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Notification = styled.TouchableOpacity`
  margin-right: 20px;
`;

const MenuBar = styled.TouchableOpacity``;
