import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 18px;
  width: 280px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 767px) {
    width: 608px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.mainBackground};
  border: none;

  &:hover,
  &:focus {
    transition: box-shadow 250ms ease-out;
    box-shadow: 0px 0px 1px 2px rgba(245, 146, 86, 0.7);
    -webkit-box-shadow: 0px 0px 2px 4px rgba(245, 146, 86, 0.7);
    -moz-box-shadow: 0px 0px 3px 1px rgba(245, 146, 86, 0.7);
  }
  @media screen and (min-width: 767px) {
    width: 44px;
    height: 44px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  margin-top: 20px;
  @media screen and (min-width: 767px) {
    font-size: 36px;
    line-height: 49px;
  }
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  text-align: center;
  letter-spacing: -0.01em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export const ButtonFill = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin-bottom: 12px;
  cursor: pointer;
  text-decoration: none;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02857em;
  max-width: 240px;
  height: 40px;
  padding: 10px 28px;
  border-radius: 40px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: #f59256;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  width: 100%;

  &:hover,
  &:focus {
    transition: box-shadow 250ms ease-out;
    box-shadow: 0px 0px 2px 4px rgba(245, 146, 86, 0.7);
    -webkit-box-shadow: 0px 0px 2px 4px rgba(245, 146, 86, 0.7);
    -moz-box-shadow: 0px 0px 4px 2px rgba(245, 146, 86, 0.7);
  }
  @media screen and (min-width: 767px) {
    max-width: 180px;
    height: 44px;
    margin-left: 20px;
  }
`;

export const ButtonEmpty = styled.button`
  max-width: 240px;
  height: 40px;
  border-radius: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: box-shadow 250ms ease-out;
    box-shadow: 0px 0px 2px 4px rgba(245, 146, 86, 0.7);
    -webkit-box-shadow: 0px 0px 2px 4px rgba(245, 146, 86, 0.7);
    -moz-box-shadow: 0px 0px 4px 2px rgba(245, 146, 86, 0.7);
  }
  @media screen and (min-width: 767px) {
    width: 180px;
    height: 44px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormFirst = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 28px;
  margin-bottom: 20px;
  width: 448px;
`;

export const FormSecond = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  margin-bottom: 16px;
  @media screen and (min-width: 767px) {
    margin-top: 12px;
    margin-bottom: 28px;
  }
`;

export const InputWrapperLast = styled.div`
  position: relative;
  margin-top: 8px;
  @media screen and (min-width: 767px) {
    margin-top: 12px;
  }
`;

export const Input = styled(Field)`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 26px;
  width: 240px;
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
  @media screen and (min-width: 767px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 767px) {
    width: 448px;
    height: 48px;
  }
`;

export const InputLast = styled(Field)`
  width: 240px;
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
  @media screen and (min-width: 767px) {
    width: 448px;
    height: 48px;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  @extend .error_text_size;
  position: absolute;
  top: 32%;
  right: 4%;
  color: red;
`;

export const ErrorTextarea = styled(ErrorMessage)`
  @extend .error_text_size;
  position: absolute;
  bottom: 10%;
  right: 4%;
  color: red;
`;

export const InputPhoto = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
`;

export const AvatarImg = styled.img`
  min-width: 182px;
  min-height: 182px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 767px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ButtonAddPhoto = styled.button`
  position: relative;
  width: 208px;
  height: 208px;
  background: ${theme.colors.mainBackground};
  border-radius: 20px;
  margin: auto;
  margin-top: 20px;
  border: none;
  overflow: hidden;

  @media screen and (min-width: 767px) {
    width: 182px;
    height: 182px;
  }
`;

//   }

export const CrossBig = styled.div`
  position: absolute;
  top: 80px;
  right: 75px;
  width: 45px;
  height: 45px;
  rotate: 45deg;
  fill: lightgray;
  @media screen and (min-width: 767px) {
    top: 65px;
    right: 63px;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  @media screen and (min-width: 767px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const WraperTextarea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (min-width: 767px) {
    margin-top: 40px;
  }
`;

export const Textarea = styled(Field)`
  padding: 12px;
  width: 240px;
  height: 100px;
  background: ${theme.colors.mainBackground};
  border: 1px solid ${theme.colors.accent};
  border-radius: 20px;
  margin-top: 8px;
  outline: none;
  resize: none;
  @media screen and (min-width: 767px) {
    width: 394px;
    height: 116px;
    margin-top: 12px;
  }
`;

export const RadioWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
`;

export const LabelRadioBtn = styled.label`
  font-size: 14px;
  margin-bottom: 12px;
  padding: 10px 28px;
  text-decoration: none;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active,
  :hover,
  :focus {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;

export const RadioBtn = styled(Field)`
  display: none;

  :checked + label {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
`;

export const LabelRadioSexBtn = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 12px;
  padding: 10px 28px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active,
  :hover,
  :focus {
    color: ${theme.colors.accent};
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const RadioSexBtn = styled(Field)`
  display: none;

  :checked + label {
    color: ${theme.colors.accent};
  }
`;
