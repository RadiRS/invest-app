import React from 'react';
import styled from 'styled-components';
import Icon from '../icons/CustomIcon';
import { Colors } from '../../themes';

const MenuDashboard = () => (
  <Container>
    <Menu>
      <Icon name="house-outline" size={24} color={Colors.snow} />
      <Text>Deposit Dana</Text>
    </Menu>
    <Border />
    <Menu>
      <Icon name="house-outline" size={24} color={Colors.snow} />
      <Text>Mulai Mendanai</Text>
    </Menu>
  </Container>
);

export default MenuDashboard;

const Container = styled.View`
  background-color: ${Colors.primary};
  margin: 0 20px;
  padding: 20px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-around;
`;

const Border = styled.View`
  width: 2px;
  background-color: ${Colors.darkBlue};
`;

const Menu = styled.TouchableOpacity`
  flex-direction: row;
`;

const Text = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.snow};
`;
