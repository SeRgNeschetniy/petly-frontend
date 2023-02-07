import styled from 'styled-components';

export const Wrapper = styled.section`
  // position: relative;
  // border: solid red;
`;

export const ImageLong = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    width: 80%;
    bottom: 0;

    margine-rigth: auto;
    margine-left: auto;
    z-index: -1;
  }
`;

export const ImageRight = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    width: 34.6%;
    bottom: 0;

    right: 0px;
    z-index: -1;
  }
`;
export const ImageGirl = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    right: 30px;
    bottom: 0;
    width: 40%;
    z-index: -1;
  }
`;
export const ImageHeart = styled.img`
  position: absolute;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    width: 6%;
    left: 870px;
    z-index: -2;
    top: 250px;
  }
`;
