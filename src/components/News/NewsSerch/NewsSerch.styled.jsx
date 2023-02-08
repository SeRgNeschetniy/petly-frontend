import styled from 'styled-components';
import { theme } from 'styles/theme';
import { AiOutlineSearch } from 'react-icons/ai';

export const Form = styled.form`
  margin-bottom: 40px;

  position: relative;
  display: flex;
  justify-content: center;
  // padding-bottom:40px;
  border: transparent;
  background: ${theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    width: 608px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: transparent;
  background: ${theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 40px;
  position: relative;
  border: 1px solid transparent;

  &:hover,
  :active {
    border: 1px solid ${theme.colors.accent};
  }
@media screen and (min-width: 768px) {
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 20px;
  padding-right: 40px;
}
@media screen and (min-width: 1280px){
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 40px;
}



`;

export const BtnSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 24px;
  height: 24px;
`;
export const IconSearch = styled(AiOutlineSearch)``;
