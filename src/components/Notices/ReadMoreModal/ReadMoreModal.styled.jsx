import styled from 'styled-components';
import { theme } from 'styles/theme';
import { AiFillHeart } from 'react-icons/ai';

export const ModalBackground = styled.div`
  position: relative;
  background-color: white;
  padding: 60px 20px 40px 20px;
  border-radius: 20px;

  @media (min-width: 768px) {
    padding: 32px 20px;
  }
`;

export const WrapImage = styled.div`
  margin-bottom: 0;
  background-size: cover;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const Image = styled.img`
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-bottom: 0;

  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;

    width: 240px;
  }
  @media (min-width: 768px) {
    width: 288px;
  }
`;
export const Wrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 28px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: ${theme.colors.black};
  word-wrap: break-word;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 321px;
    font-size: 28px;
    margin-bottom: 20px;
    // padding-bottom: 40px;
  }
`;

export const ModalTextWrapper = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  // @media (min-width: 768px) {
  //   margin-right: 75px;
  // }
`;

export const ModalCommentWrapper = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 40px;
    width: 240px;
  }

  @media (min-width: 768px) {
    margin-bottom: 32px;
    width: 660px;
  }
`;

export const Text = styled.p`
  width: 40%;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 16px;
    // width: 70px;
    // margin-right: 51px;
  }
`;

export const Span = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  margin-bottom: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const CommentsText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const FieldText = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
`;

export const TabletWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const TabletTextWrapper = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const ModalBtnAdd = styled.button`
  letter-spacing: 0.04em;
  display: ${props => (props.icon ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 9px 87px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.accent};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 0;
  }

  &:hover,
  :focus {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 9px 45px;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  &:hover,
  &:focus {
    background-color: ${props =>
      props.outline ? `${theme.colors.accent}` : '#FF6101'};
    border: 2px solid
      ${props => (props.outline ? `${theme.colors.accent}` : '#FF6101')};
  }
  &::before {
    position: absolute;
  }
  &:hover > * {
    color: ${theme.colors.white};
  }
`;

export const ModalBtnRemove = styled.button`
  letter-spacing: 0.04em;
  display: ${props => (props.icon ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 9px 87px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.accent};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${theme.colors.accent};
  color: white;
  &:not(:last-child) {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    background-color: white;
    color: ${theme.colors.accent};
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 9px 45px;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  &::before {
    position: absolute;
  }
  &:hover > * {
    color: ${theme.colors.accent};
  }
`;

export const ModalBtnContact = styled.button`
  letter-spacing: 0.04em;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 9px 87px;
  border-radius: 40px;
  background-color: ${theme.colors.accent};
  background-color: ${props =>
    props.outline ? 'white' : `${theme.colors.accent}`};
  border: 2px solid ${theme.colors.accent};
  color: ${theme.colors.white};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 9px 45px;
    margin-bottom: 0;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  &:hover,
  &:focus {
    background-color: ${props =>
      props.outline ? `${theme.colors.accent}` : '#FF6101'};
    border: 2px solid
      ${props => (props.outline ? `${theme.colors.accent}` : '#FF6101')};
  }

  &::before {
    position: absolute;
  }
`;

export const Sticker = styled.span`
  position: absolute;
  left: 0;
  top: 80px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  width: 150px;
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 1.3;
  letter-spacing: 0.04em;

  display: block;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  @media (min-width: 768px) {
    top: 52px;
  }
`;

export const AddIcon = styled(AiFillHeart)`
  width: 16px;
  height: 16px;
  color: white;
`;

export const AddedIcon = styled(AiFillHeart)`
  width: 16px;
  height: 16px;
  color: ${theme.colors.accent};
  margin-left: 8px;
`;
