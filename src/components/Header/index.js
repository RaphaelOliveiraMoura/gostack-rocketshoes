import React from 'react';
import {Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo.png';
import {Container, Actions, CartAmount} from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
      <Actions>
        <Icon name="shopping-cart" size={20} color="#fff" />
        <CartAmount>2</CartAmount>
      </Actions>
    </Container>
  );
}
