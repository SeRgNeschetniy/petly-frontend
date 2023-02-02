import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Item = styled.li`
  padding: 12px 4px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: ${theme.shadows.additional};

  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 4px;
    border-radius: 40px;
  }
`;

export const Heading = styled.h3`
  margin: 0 20px 12px 20px;
  text-align: center;
  text-decoration: underline;
  font-size: 12px;
  line-height: 1.3;
  color: ${theme.colors.accent};

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.4;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 12px;
  align-items: flex-start;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const TextField = styled.li`
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 1.35;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.4;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
