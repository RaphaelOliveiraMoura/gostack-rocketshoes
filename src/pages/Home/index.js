import React from 'react';

import {
  Container,
  ProductsList,
  Product,
  Image,
  Title,
  Price,
  AddProductButton,
  CartImage,
  ProductAmount,
  AddProductButtonText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <ProductsList>
        <Product>
          <Image />
          <Title>Tênis de Caminhada Leve Confortável</Title>
          <Price>R$179,92</Price>
          <AddProductButton>
            <CartImage />
            <ProductAmount>3</ProductAmount>
            <AddProductButtonText>ADICIONAR</AddProductButtonText>
          </AddProductButton>
        </Product>
      </ProductsList>
    </Container>
  );
}
