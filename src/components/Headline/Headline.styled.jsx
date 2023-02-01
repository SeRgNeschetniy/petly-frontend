import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.3;
  text-align: center;

  @media screen and (min-width: 320px) {
    margin-top: 42px;
    margin-bottom: 28px;
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 90px;
    font-size: 48px;
  }
`;
