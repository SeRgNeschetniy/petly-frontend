import styled from 'styled-components';
import { theme } from 'styles/theme';

import { AiOutlineHeart } from 'react-icons/ai';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
`;

export const LearnMoreBtn = styled.button`
  color: ${theme.colors.accent};
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  font-weight: 500;
  font-size: ${theme.fontSizes.medium};
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: block;
  padding: 8px;
  width: 100%;
  margin-bottom: 12px;

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
`;

export const DeleteBtn = styled.button`
  border: 2px solid #ff6101;
  color: #ff6101;
  background: ${theme.colors.white};
  border-radius: 40px;
  font-weight: 500;
  font-size: ${theme.fontSizes.medium};
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;

  &:hover {
    background: #ff6101;
    color: ${theme.colors.white};
  }
`;
export const Container = styled.div`
  padding: 20px;
`;

export const Wrapper = styled.div`
  padding: 20px, 20px, 12px, 20px;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #111111;

  margin-bottom: 20px;
`;

export const Text = styled.p`
  &:not(last-child) {
    margin-bottom: 8px;
  }
`;

export const Sticker = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
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
`;

export const AddToFavoriteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 50%;

  &:hover,
  :active {
    background: ${theme.colors.accent};
  }
`;
export const Span = styled.span`
  display: inline-block;
  margin-right: 37px;
`;
export const AddIcon = styled(AiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: ${theme.colors.accent};

  // &:hover, :active {
  //   fill: ${theme.colors.accent};
  // }

  &:hover,
  :active > * {
    fill: ${theme.colors.white};
  }
`;