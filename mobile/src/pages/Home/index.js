import React from 'react';

import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductsList,
  Product,
  Image,
  Title,
  Price,
  AddProductButton,
  ProductAmount,
  AddProductButtonText,
  CartButtonContainer,
} from './styles';

import Header from '../../components/Header';

const data = [
  {
    id: 1,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 2,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 3,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 5,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 6,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 4,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
];

export default function Home({navigation}) {
  return (
    <Container>
      <ProductsList>
        <FlatList
          data={data}
          horizontal
          keyExtractor={product => String(product.id)}
          renderItem={({item}) => (
            <Product>
              <Image source={{uri: item.image}} />
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
              <AddProductButton>
                <CartButtonContainer>
                  <Icon name="shopping-cart" size={20} color="#fff" />
                  <ProductAmount>3</ProductAmount>
                </CartButtonContainer>
                <AddProductButtonText>ADICIONAR</AddProductButtonText>
              </AddProductButton>
            </Product>
          )}
        />
      </ProductsList>
    </Container>
  );
}

Home.navigationOptions = {
  header: <Header />,
};
