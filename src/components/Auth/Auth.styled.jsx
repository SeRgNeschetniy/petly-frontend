import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from '../../styles/theme';

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
`;

export const InputField = styled.div`
  position: relative;
`;

export const Input = styled.input`
  outline: none;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: ${theme.colors.mainBackground};
  border: 1px solid ${theme.colors.accent};
  border-radius: 40px;
  padding-left: 14px;
  font-size: 14px;
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-size: 14px;
    color: ${theme.colors.gray};
  }
  &:first-child {
    margin-bottom: 16px;
  }
  &:nth-child(2){
    margin-bottom: 40px;
  }
  &:hover, &:focus {
    border: 2px solid #FF6101;
  }
`;

export const Button = styled.button`
  color: ${theme.colors.white};
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  font-size: ${theme.fontSizes.large};
  background-color: ${theme.colors.accent};
  margin-bottom: 20px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover, &:focus {
    background-color: #FF6101;
    border: 1px solid ${theme.colors.accent};
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  font-size: ${theme.fontSizes.small};
  top: 40px;
  left: 10px;
  color: ${theme.colors.accent};
`;

export const LinkText = styled.p`
text-align: center;
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.small};
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: blue;
  &::before {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: blue;
    left: 0;
    top: 14px;
  }
`;

export const Container = styled.section`
        font-size: 1.5em;
        padding: 0;
        margin: 0;

        &.example-appear {
            opacity: 0.01;
        }

        &.example-appear-active {
            opacity: 1;
            transition: opacity 500ms ease-out;
        }`;

export const Title = styled.h1`
  font-size: 24px;
`;