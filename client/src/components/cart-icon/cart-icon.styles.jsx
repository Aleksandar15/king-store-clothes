import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  height: 45px;
  width: 45px;
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  height: 24px;
  width: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 10px;
  bottom: 12px;
`;
