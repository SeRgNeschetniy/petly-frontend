import styled from '@emotion/styled';

import { ReactComponent as LogoIcon } from '../../images/logo/petly.svg';

import { Container as Main } from 'styles';

export const MainContainer = styled(Main)`
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 59px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;

  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding-top: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 20px;
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
