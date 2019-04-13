import React, { Component } from 'react';
import styled from 'styled-components/native';
import { DrawerActions } from 'react-navigation';
import { Colors } from '../../themes';
import Icon from '../icons/CustomIcon';
import MenuItem from './MenuItem';
import BottomMenuItem from './BottomMenuItem';

export class Drawer extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <CloseContainer>
          <CloseWrapper
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Icon name="letter-x" color={Colors.snow} size={24} />
          </CloseWrapper>
        </CloseContainer>
        <MenuContainer>
          <TitleMenuWrapper>
            <TitleMenu>Menu</TitleMenu>
          </TitleMenuWrapper>

          <MenuWrapper>
            <MenuItem
              navigation={navigation}
              iconName="book"
              labelName="Mutasi"
              styleBackground={{ backgroundColor: Colors.lightBlue }}
            />
            <MenuItem
              navigation={navigation}
              iconName="coins-stacks-money"
              labelName="Tarik Dana"
              styleBackground={{ backgroundColor: Colors.darkBlue }}
            />
            <MenuItem
              navigation={navigation}
              iconName="workers"
              labelName="Referal"
              styleBackground={{ backgroundColor: Colors.darkBlue }}
            />
            <MenuItem
              navigation={navigation}
              iconName="logout"
              labelName="Logout"
              styleBackground={{ backgroundColor: Colors.lightBlue }}
            />
          </MenuWrapper>

          <BottomMenuWrapper>
            <TitleMenuWrapper>
              <TitleMenu>Butuh Bantuan ?</TitleMenu>
            </TitleMenuWrapper>
            <MenuWrapper>
              <BottomMenuItem
                iconName="mail-send"
                labelName="lenders@modalrakyat.id"
                IconWrapperStyle={{ backgroundColor: Colors.lightBlue }}
                styleBackground={{ backgroundColor: Colors.darkBlue }}
              />
              <BottomMenuItem
                iconName="whatsapp"
                labelName="0813 2488 4526"
                IconWrapperStyle={{ backgroundColor: Colors.darkBlue }}
                styleBackground={{ backgroundColor: Colors.lightBlue }}
              />
            </MenuWrapper>
          </BottomMenuWrapper>
        </MenuContainer>
      </Container>
    );
  }
}

export default Drawer;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const CloseContainer = styled.View`
  flex: 0.15;
  background-color: transparent;
`;

const CloseWrapper = styled.TouchableOpacity`
  background-color: ${Colors.orange};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.View`
  flex: 0.85;
  background-color: ${Colors.primary};
`;

const TitleMenuWrapper = styled.View`
  padding: 20px;
`;

const TitleMenu = styled.Text`
  font-size: 22px;
  color: ${Colors.snow};
`;

const MenuWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BottomMenuWrapper = styled.View`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  right: 0;
  left: 0;
`;
