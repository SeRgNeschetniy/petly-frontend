import styled from '@emotion/styled';

import { ReactComponent as Burger } from '../../../images/burgerAndClose/burger.svg';
import { ReactComponent as Close } from '../../../images/burgerAndClose/close.svg';

export const BurgerIcon = styled(Burger)`
  display: flex;
`;
export const CloseIcon = styled(Close)`
  display: flex;
`;
export const Container = styled.button`
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
