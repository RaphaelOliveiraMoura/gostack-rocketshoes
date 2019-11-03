import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {darken} from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 36px 16px;
  background: #191920;
`;

export const ProductsList = styled.View`
  height: 380px;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 8px;
  margin: 16px;
  width: 220px;
  align-items: center;
  padding: 14px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 21px;
  color: #000;
  font-weight: bold;
  align-self: flex-start;
`;

export const AddProductButton = styled(RectButton)`
  background: #7159c1;
  width: 100%;
  margin-top: 14px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const CartButtonContainer = styled.View`
  background: ${darken(0.03, '#7159c1')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 12px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ProductAmount = styled.Text`
  color: #fff;
`;

export const AddProductButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 26px;
  color: #fff;
`;
