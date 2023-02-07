import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  @media screen and (min-width: 320px) {
    // position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.38;
    display: inline-block;
    /*margin-top: 60px;*/
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 1.47;
    /*margin-top: 90px;*/
    margin-bottom: 0px;
    display: inline-block;
    text-align: left;
  }
  @media screen and (min-width: 1280px) {
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 1.47;
    margin-top: 93px;
    margin-bottom: 0px;
    display: inline-block;
    text-align: left;
  }
  font-family: 'Manrope';
  color: #000000;
`;

export const MainPageImage = styled.img`
  @media screen and (min-width: 320px) {
    display: block;
    bottom: 0;
    margin-top: -50px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MainPageImageTab = styled.img`
  @media screen and (max-width: 319px) {
    display: none;
  }
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    bottom: 0;
    margin-top: -235px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MobileBgImageLogin = styled.img`
  @media screen and (max-width: 319px) {
    display: none;
  }
  @media screen and (min-width: 320px) {
    display: block;
    bottom: 0;
    margin-top: 0px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const TabletBgImg = styled.img`
  position: absolute;
  @media screen and (max-width: 319px) {
    display: none;
  }
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    z-index: -2;
    display: block;
    margin-top: -200px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const DesktopBgImageLogin = styled.img`
  position: absolute;
  @media screen and (max-width: 319px) {
    display: none;
  }
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    z-index: -2;
    display: block;
    right: 0;
    bottom: 0;
  }
`;
