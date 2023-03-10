import styled from 'styled-components';
import { theme } from 'styles/theme';

const currentDate = new Date();

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
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.4;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.brightAccent};
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

export const TextList = styled.ul`
  position: relative;
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

export const Contact = styled.span`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
  }
`;

export const TimeBtn = styled.button`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${theme.colors.brightAccent};
  }
`;

export const TimeList = styled.ul`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 20%;
  min-width: 120px;
  padding: 12px;
  font-size: 12px;
  line-height: 1.3;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.accent};
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const DayLi = styled.li`
  color: ${p =>
    p.index === currentDate.getDay() - 1
      ? `${theme.colors.accent}`
      : `${theme.colors.black}`};
  background-color: ${p =>
    p.index === currentDate.getDay() - 1
      ? `${theme.colors.mainBackground}`
      : `${theme.colors.white}`};
`;

export const DayItem = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  :last-child {
    margin-bottom: 0;
  }
`;
