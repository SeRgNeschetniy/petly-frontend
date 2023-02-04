import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export const Burger = styled(GiHamburgerMenu)`
  display: flex;
  width: 30px;
  height: 20px;
`;
export const Close = styled(GrClose)`
  display: flex;
  width: 20px;
  height: 20px;
`;
export const Container = styled.button`
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-left: ${({ show }) => (show ? '30px' : '20px')};
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
