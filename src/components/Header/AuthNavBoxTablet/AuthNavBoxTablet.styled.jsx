import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  margin-left: auto;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    opacity: 1;

    ${({ show }) =>
      show &&
      css`
        opacity: 0;
        pointer-events: none;
      `}
    transition: 
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const AuthLinks = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};

  &.active {
    color: white;
    background-color: ${({ theme }) => theme.colors.accent};
  }
  &.active:hover {
    border: 2px solid ${({ theme }) => theme.colors.brightAccent};
    background-color: ${({ theme }) => theme.colors.brightAccent};
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: white;
    background-color: ${({ theme }) => theme.colors.brightAccent};
    border: 2px solid ${({ theme }) => theme.colors.brightAccent};
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding: 8.5px 28px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 28px;
  }
`;
