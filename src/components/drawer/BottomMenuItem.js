import React from 'react';
import styled from 'styled-components/native';
import Icon from '../icons/CustomIcon';
import { Colors } from '../../themes';

const BottomMenuWrapper = props => {
  const { iconName, labelName, styleBackground, IconWrapperStyle } = props;

  return (
    <Container>
      <IconWrapper style={[IconWrapperStyle]}>
        <Icon name={iconName} color={Colors.snow} size={30} />
      </IconWrapper>
      <TextLabelWrapper style={[styleBackground]}>
        <TextLabel>{labelName}</TextLabel>
      </TextLabelWrapper>
    </Container>
  );
};

export default BottomMenuWrapper;

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const IconWrapper = styled.View`
  flex: 0.15;
  padding: 20px;
  align-items: center;
`;

const TextLabelWrapper = styled.View`
  flex: 0.85;
  padding: 20px;
`;

const TextLabel = styled.Text`
  font-size: 22px;
  color: ${Colors.snow};
`;
