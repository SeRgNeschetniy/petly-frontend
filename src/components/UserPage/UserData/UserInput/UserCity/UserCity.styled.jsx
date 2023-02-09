import styled from 'styled-components';
import { theme } from '../../../../../styles/theme';
export const BoxInput = styled.div`
  display: flex;
  align-items: centre;

  align-items: center;
`;
export const TextField = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #111111;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    margin-right: auto;
  }
`;
export const InputForm = styled.input`
  outline: none;
  background-color: white;
  border: 1px solid white;
  border-radius: 40px;
  height: 32px;
  width: 159px;
  margin-left: auto;
  margin-right: 9px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding-left: 12px;
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:focus {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    width: 216px;
    margin-right: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: 24px;
    width: 216px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
`;
export const ButtonEdit = styled.button`
  width: 20px;
  height: 20px;
  background: #fdf7f2;
  border-radius: 20px;
  backdrop-filter: blur(2px);
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover {
    background: ${theme.colors.brightAccent};
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
