import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  height: 340px;
  width: 240px;
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 15px;
  top: 80px;
  right: 0px;
  border: 1px solid black;
  z-index: 5;
`

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsContainer = styled.div`
  height: 240px;
  flex-direction: column;
  display: flex;
  overflow: scroll;
`