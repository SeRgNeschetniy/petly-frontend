import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: baseline;
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
