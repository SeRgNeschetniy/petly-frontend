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