import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const showScroll = active => {
  const body = document.body;
  body.style.overflowY = active ? 'hidden' : 'visible';
};

export const Container = styled.nav`
  display: none;

  flex-direction: column;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 72px;

  padding-top: 42px;

  width: 100%;
  height: calc(100% - 72px);

  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  letter-spacing: 0.04em;

  /* opacity: 0; */
  pointer-events: none;

  z-index: 40;

  ${({ active }) => {
    if (window.matchMedia('(max-width: 1280px)').matches) {
      showScroll(active);
    }

    return (
      active &&
      css`
        display: flex;
        /* opacity: 1; */
        pointer-events: auto;
      `
    );
  }}

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding-top: 88px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    position: static;
    flex-direction: row;
    height: 50px;

    padding-top: 0px;

    opacity: 1;
    pointer-events: auto;
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

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    order: 1;
    gap: 20px;
    margin-bottom: 0px;
    margin-left: auto;

    font-size: 20px;
  }
`;

export const AuthLinks = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
  }
  &.active:hover {
    border: 2px solid ${({ theme }) => theme.colors.brightAccent};
    background-color: ${({ theme }) => theme.colors.brightAccent};
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.white};
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
  color: ${p => p.theme.colors.black};
  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.accent};
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
