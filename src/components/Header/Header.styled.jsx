import styled from '@emotion/styled';

import { ReactComponent as LogoIcon } from '../../images/logo/petly.svg';

export const Container = styled.header`
  display: flex;

  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding-top: 16px;
  margin-bottom: 42px;

  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  /* @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  } */

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    /* padding-top: 30px; */
    margin-bottom: 59px;
    width: 1280px;
    padding: 30px 16px 0px;
  }
`;

export const Logo = styled(LogoIcon)`
  display: flex;
  width: 82px;
  height: 42px;

  margin: 0;

  @media screen and (min-width: 768px) {
    width: 94px;
    height: 48px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 80px;
  }
`;
