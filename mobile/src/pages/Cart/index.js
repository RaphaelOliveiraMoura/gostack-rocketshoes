import React from 'react';

import {
  Container,
  Card,
  ProductList,
  Product,
  ProductInformations,
  Image,
  ProductDescriptionContainer,
  Title,
  Price,
  ProductSubtotalContainer,
  Amount,
  SubTotalPrice,
  TotalText,
  TotalAmount,
  FinishBuyButton,
  FinishBuyButtonText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Card>
        <ProductList>
          <Product>
            <ProductInformations>
              <Image />
              <ProductDescriptionContainer>
                <Title>Tênis de Caminhada Leve Confortável</Title>
                <Price>R$179,99</Price>
              </ProductDescriptionContainer>
            </ProductInformations>
            <ProductSubtotalContainer>
              <Amount>3</Amount>
              <SubTotalPrice>R$539,70</SubTotalPrice>
            </ProductSubtotalContainer>
          </Product>
        </ProductList>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$1619,10</TotalAmount>
        <FinishBuyButton>
          <FinishBuyButtonText>FINALIZAR PEDIDO</FinishBuyButtonText>
        </FinishBuyButton>
      </Card>
    </Container>
  );
}
