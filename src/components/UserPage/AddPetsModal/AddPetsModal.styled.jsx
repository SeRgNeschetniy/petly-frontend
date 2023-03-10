import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.white};
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
  border: 2px solid ${theme.colors.white};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover,
  &:focus {
    background-color: ${theme.colors.brightAccent};
    color: ${theme.colors.white};
  }

  @media screen and (min-width: 767px) {
    width: 44px;
    height: 44px;
  }
`;

export const TitleFirstForm = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 28px;
  @media screen and (min-width: 767px) {
    font-size: 2.25rem;
    line-height: 3rem;
    margin-bottom: 40px;
  }
`;

export const TitleSecondForm = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 767px) {
    font-size: 2.25rem;
    line-height: 3rem;
    margin-bottom: 20px;
  }
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
  border: 2px solid ${theme.colors.accent};
  margin-bottom: 12px;
  cursor: pointer;
  text-decoration: none;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  letter-spacing: 0.02857em;
  max-width: 240px;
  height: 40px;
  padding: 10px 28px;
  border-radius: 40px;
  width: 100%;
  color: ${theme.colors.white};
  border-color: ${theme.colors.accent};

  background-color: ${theme.colors.accent};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(245, 97, 1);
    color: ${theme.colors.white};
    border-color: #ff6101;
    background-color: #ff6101;
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
  border: 2px solid ${theme.colors.accent};
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  cursor: pointer;
  outline: none;
  color: ${theme.colors.dark};
  border-color: ${theme.colors.accent};
  background-color: ${theme.colors.white};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(245, 97, 1);
    color: ${theme.colors.white};
    border-color: #ff6101;
    background-color: #ff6101;
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

  margin-bottom: 20px;
  width: 448px;
`;

export const FormSecond = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
  line-height: 1.6rem;
  width: 240px;
  height: 40px;

  background-color: ${theme.colors.mainBackground};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  padding-left: 14px;
  font-size: 14px;
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 2px solid #ff6101;
  }
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
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  padding-left: 14px;
  font-size: 14px;
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 2px solid #ff6101;
  }
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
  height: -webkit-fill-available;
  width: inherit;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 767px) {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const ButtonAddPhoto = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 208px;
  height: 208px;
  background: ${theme.colors.mainBackground};
  border-radius: 20px;
  margin: auto;
  margin-top: 20px;
  border: 2px solid ${theme.colors.mainBackground};
  overflow: hidden;
  &:hover,
  &:focus {
    border: 2px solid ${theme.colors.accent};
  }
  @media screen and (min-width: 767px) {
    width: 182px;
    height: 182px;
  }
`;

export const ErrMessagePhoto = styled.p`
  @extend .error_text_size;
  position: absolute;
  top: 85%;
  right: 32%;
  color: red;
  @media screen and (min-width: 767px) {
    top: 82%;
    right: 21%;
  }
`;

export const CrossBig = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  color: #d9d9d9;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.6rem;
  @media screen and (min-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.6rem;
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
  border: 2px solid ${theme.colors.accent};
  border-radius: 20px;
  margin-top: 8px;
  outline: none;
  resize: none;
  &:hover,
  &:focus {
    border: 2px solid #ff6101;
  }
  @media screen and (min-width: 767px) {
    width: 394px;
    height: 116px;
    margin-top: 12px;
  }
`;
