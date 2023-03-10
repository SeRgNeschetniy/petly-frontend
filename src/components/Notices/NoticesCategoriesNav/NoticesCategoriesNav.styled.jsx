import styled from 'styled-components';
import { theme } from 'styles/theme';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 14px;
  margin-bottom: 12px;
  padding: 10px 28px;
  text-decoration: none;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
  &:hover {
    background: ${theme.colors.brightAccent};
    color: ${theme.colors.white};
    border-color: ${theme.colors.brightAccent};
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const AuthLink = styled(NavLink)`
  font-size: 14px;
  margin-bottom: 0;
  padding: 10px 28px;
  text-decoration: none;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }
  &:hover {
    background: ${theme.colors.brightAccent};
    color: ${theme.colors.white};
    border-color: ${theme.colors.brightAccent};
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
`;

export const AuthWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 12px;
  }
`;
