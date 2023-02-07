import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
`;

export const MainPageImageDsktpA = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;

    width: 1100px;
    height: 400px;

    left: -10px;
    top: 60px;
    z-index: -5;
  }
`;

export const MainPageImageDsktpB = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    top: 65px;
    right: -45px;

    width: 511px;
    height: 393px;
    // z-index: -4;
  }
`;
export const MainPageImageDsktpC = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;

    top: -200px;
    right: -20px;

    width: 610px;
    height: 660px;
  }
`;
export const MainPageImageDsktpD = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;

    width: 92px;
    height: 89px;

    top: -190px;
    right: 450px;
  }
`;
