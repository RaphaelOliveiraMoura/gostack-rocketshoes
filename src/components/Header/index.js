import React from 'react';
import {View} from 'react-native';

import {Container, Logo, CartIcon, CartAmount} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <View>
        <CartIcon />
        <CartAmount>2</CartAmount>
      </View>
    </Container>
  );
}
