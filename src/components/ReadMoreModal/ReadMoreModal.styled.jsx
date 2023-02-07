import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ModalBackground = styled.div`
  position: relative;
  background-color: white;
  padding: 40px 20px;
  border-radius: 20px;
  @media (min-width: 768px) {
  }
`;

export const Image = styled.img`
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin-right: 75px;
  }
`;

export const ModalCommentWrapper = styled.div`
  margin-bottom: 40px;
`;

export const Text = styled.p`
  width: 50%;
  &:not(:last-child) {
    amrgin-bottom: 8px;
  }
`;

export const FieldText = styled.div`
  margin-bottom: 28px;
`;

export const TabletWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const TabletTextWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const ModalButton = styled.button`
  display: ${props => (props.icon ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;

  padding: 9px 87px;
  border-radius: 40px;
  background-color: ${theme.colors.accent};
  background-color: ${props =>
    props.outline ? 'white' : `${theme.colors.accent}`};
  border: 2px solid ${theme.colors.accent};
  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
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
    background-image: ;
  }
`;

export const HeartIcon = styled.img``;
