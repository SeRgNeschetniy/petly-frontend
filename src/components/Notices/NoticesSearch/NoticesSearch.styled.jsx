import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  // &:hover > svg {
  //   fill: ${theme.colors.accent};
  // }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: 1px solid transparent;
  border-radius: 40px;
  padding: 13px 40px 13px 20px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 608px;
  }

  &:hover,
  :focus {
    border: 1px solid ${theme.colors.accent};
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
