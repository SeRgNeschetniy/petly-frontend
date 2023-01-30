import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding-top: 16px;

  @media screen and (min-width: 1280px) {
    padding-top: 30px;
  }
`;

export const Logo = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.black};

  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 80px;
  }
`;

export const AccentText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const ShowButton = styled.button`
  margin-left: auto;
  & > svg {
    display: flex;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin-left: 25px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;

  margin-top: 42px;
  padding-top: 42px;

  width: 100vw;
  height: 100vh;

  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  letter-spacing: 0.04em;

  opacity: 0;
  transform: translateX(100%);

  z-index: 10;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    margin-top: 48px;
    padding-top: 88px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    flex-direction: row;
    height: 50px;
    margin-top: 0px;
    padding-top: 0px;
    transform: translateX(0);
    opacity: 1;
  }
`;

export const AuthNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;

  font-size: 14px;
  line-height: 1.35;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    order: 1;
    gap: 20px;
    margin-bottom: 0px;
    margin-left: auto;

    font-size: 20px;
  }
`;

export const AuthNavBoxTablet = styled.div`
  margin-left: auto;
  display: none;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
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
`;

export const AuthLinks = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};

  ${({ accent }) =>
    accent === 'true' &&
    css`
      color: white;
      background-color: #f59256;
    `};

  :hover,
  :focus-visible {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }

  @media screen and (min-width: 768px) {
    padding: 8.5px 28px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 28px;
  }
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    gap: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    font-size: 20px;
    line-height: 1.35;
    gap: 80px;
  }
`;

export const Links = styled(NavLink)`
  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.black};
  }
`;
