import styled from 'styled-components';

export const Wrapper = styled.section`
  // @media screen and (min-width: 320px) {
  // position: absolute;
  // }
  // padding: 4em;
`;

export const Title = styled.h1`
  @media screen and (min-width: 320px) {
    // position: absolute;

    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.38;

    margin-top: 60px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 1.47;

    margin-top: 90px;
    margin-bottom: 0px;

    display: block;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 1.47;

    margin-top: 93px;
    margin-bottom: 0px;

    display: block;
    text-align: left;
  }
  font-family: 'Manrope';
  color: #000000;
`;

export const MainPageImage = styled.img`
  @media screen and (min-width: 320px) {
    margin-top: -55px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MainPageImageTab = styled.img`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    margin-top: -235px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
