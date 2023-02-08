import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const MainText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 567px;
  }
`;
export const H3 = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;

  margin: 0;
  margin-right: 15px;
`;
export const AddButton = styled.button`
  background: #f59256;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${theme.colors.brightAccent};
  }
`;
export const SecondBox = styled.div`
  align-items: center;
`;
export const Head = styled.div`
  display: flex;
  margin-bottom: 32px;
  align-items: baseline;
  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;
export const AddPet = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
export const PetCard = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
`;
export const PetAvatar = styled.img`
  border-radius: 20%;
`;
export const PetInfo = styled.div`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export const DelateButton = styled.button`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
