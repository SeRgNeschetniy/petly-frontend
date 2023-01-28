import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink, Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.mainBackground};
  padding: 16px 20px 0px;

  & > svg {
    width: 20px;
    height: 20px;
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
`;

export const AccentText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const ShowButton = styled.button``;

export const NavBox = styled.div`
  position: absolute;
  left: 0;
  margin-top: 83px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  opacity: 0;
  transform: translateX(100%);

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AuthNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
`;

export const AuthButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};

  ${({ accent }) =>
    accent &&
    css`
      color: white;
      background-color: #f59256;
    `};
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Links = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  line-height: 1.3;
  color: ${p => p.theme.colors.black};

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.black};
  }
`;
