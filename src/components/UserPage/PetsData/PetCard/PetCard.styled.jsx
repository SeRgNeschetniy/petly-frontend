import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const PetCard = styled.div`
  position: relative;
  padding: 20px;
  padding-top: 16px;
  padding-bottom: 40px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 20px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 22px;
  }
`;
export const PetAvatar = styled.img`
  border-radius: 20%;
  width: 240px;
  height: 240px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    padding-bottom: 0;
    width: 161px;
    height: 161px;
  }
`;

export const PetWrapp = styled.div`
  position: relative;
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 12px;
  &:last-child {
    padding-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const DelateButton = styled.button`
  width: 17px;
  height: 17px;
  position: absolute;
  top: 254px;
  right: 20px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${theme.colors.brightAccent};
    color: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    top:20px;
  }
`;
export const Typography = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
`;
