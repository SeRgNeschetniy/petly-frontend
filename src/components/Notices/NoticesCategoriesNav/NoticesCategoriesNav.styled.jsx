import styled from 'styled-components';
import { theme } from 'styles/theme';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 12px;
  }

  font-size: 14px;
  margin-bottom: 12px;

  padding: 10px 28px;
  text-decoration: none;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  align-items: center;

  &.active,
  :hover,
  :focus {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;

export const Nav = styled.div`
  // margin-right:auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
`;

export const AuthWrapper = styled.div`
  display: flex;
`;
