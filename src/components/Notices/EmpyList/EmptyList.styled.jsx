import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 40px;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.large};
`;
