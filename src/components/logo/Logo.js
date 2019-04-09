import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';
import { Images } from '../../themes';

const Logo = props => (
  <Wrapper>
    <Image style={[props.style]} source={Images.logo} resizeMode="center" />
  </Wrapper>
);

export default Logo;

const Wrapper = styled.View`
  /* width: 100px; */
`;
