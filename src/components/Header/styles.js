import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0 26px;
  width: 100%;
  height: 80px;
  background: #141419;
  justify-content: space-between;
  align-items: center;
`;

export const Actions = styled.View`
  position: relative;
  padding: 8px;
`;

export const CartAmount = styled.Text`
  color: #fff;
  font-weight: bold;
  position: absolute;
  border-radius: 12px;
  padding: 0px 4px;
  background: #7159c1;
  top: 0;
  right: 2px;
`;
