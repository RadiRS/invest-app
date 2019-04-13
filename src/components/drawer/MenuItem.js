import React from 'react';
import styled from 'styled-components/native';
import Icon from '../icons/CustomIcon';
import { Colors } from '../../themes';

const MenuItem = props => {
  const { iconName, labelName, styleBackground } = props;

  return (
    <Container style={[styleBackground]}>
      <Icon name={iconName} color={Colors.snow} size={45} />
      <TextLabel>{labelName}</TextLabel>
    </Container>
  );
};

export default MenuItem;

const Container = styled.TouchableOpacity`
  width: 50%;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

const TextLabel = styled.Text`
  font-size: 25px;
  color: ${Colors.snow};
`;
