import React from 'react';
import styled from 'styled-components/native';

const Footer = props => {
  const { navigation } = props;

  return (
    <Container>
      <Text>Menu 1</Text>
      <Text>Menu 2</Text>
    </Container>
  );
};

export default Footer;

const Container = styled.View``;

const Text = styled.Text``;
