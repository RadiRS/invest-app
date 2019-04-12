import React from 'react';
import styled from 'styled-components/native';
import Icon from '../icons/CustomIcon';
import { Colors } from '../../themes';

const InfoDashboard = props => {
  const { iconName, labelInfo, textInfo } = props;

  return (
    <Container>
      <Cover>
        <Icon name={iconName} color={Colors.orange} size={24} />
      </Cover>
      <Content>
        <LabelInfo>{labelInfo}</LabelInfo>
        <TextInfo>Rp {textInfo}</TextInfo>
      </Content>
    </Container>
  );
};

export default InfoDashboard;

const Container = styled.View`
  background-color: ${Colors.snow};
  border-radius: 5px;
  margin: 0 10px;
  margin-bottom: 20px;
  padding: 20px;
  width: 45%;
  elevation: 2px;
`;

const Cover = styled.View`
  margin-bottom: 20px;
`;

const Content = styled.View``;

const LabelInfo = styled.Text`
  font-size: 18px;
  color: ${Colors.lightGray};
`;

const TextInfo = styled.Text`
  font-size: 20px;
  color: ${Colors.primary};
`;
