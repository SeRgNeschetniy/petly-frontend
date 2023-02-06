import styled from '@emotion/styled';

import { ReactComponent as LogoIcon } from '../../images/logo/petly.svg';
console.log(LogoIcon);

export const Container = styled.header`
  display: flex;

  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding-top: 16px;
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 30px;
    margin-bottom: 59px;
  }
`;

export const Logo = styled(LogoIcon)`
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

export const AccentText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
