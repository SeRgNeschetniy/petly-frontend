import styled from "styled-components";
import { theme } from "styles/theme";

export const ModalBackground = styled.div`
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
  
export const TabletTextWrapper = styled.div`

`;

export const ButtonWrapper = styled.div`
  @media(min-width: 768px) {
    display:flex;
    width: 352px;
    margin-left: auto;
  }
`;