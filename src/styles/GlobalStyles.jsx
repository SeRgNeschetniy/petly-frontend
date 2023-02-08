import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { normalize } from 'styled-normalize';

// import mobileImage from '../images/mainPage/home-bg-m@2x.png';
// import tabImage from '../images/mainPage/home-bg-t@2x.png';
import dsctpImageHomeBg from '../images/mainPage/home-bg-d@1x.png';
import dsctpImageGirl from '../images/mainPage/home-bg3-d@1x.png';
import dsctpImageHeart from '../images/mainPage/home-bg4-d@1x.png';
import dsctpImageHomeBg2x from '../images/mainPage/home-bg-d@2x.png';
import dsctpImageGirl2x from '../images/mainPage/home-bg3-d@2x.png';
import dsctpImageHeart2x from '../images/mainPage/home-bg4-d@2x.png';

import tbltImageHomeBg from '../images/mainPage/home-bg-t@1x.png';
import tbltImageGirl from '../images/mainPage/home-bg3-t@1x.png';
import tbltImageHomeBg2x from '../images/mainPage/home-bg-t@2x.png';
import tbltImageGirl2x from '../images/mainPage/home-bg3-t@2x.png';

import mblImageHomeBg from '../images/mainPage/home-bg-m@1x.png';
import mblImageGirl from '../images/mainPage/home-bg3-m@1x.png';
import mblImageHomeBg2x from '../images/mainPage/home-bg-m@2x.png';
import mblImageGirl2x from '../images/mainPage/home-bg3-m@2x.png';

import dsctpImageLoginBg from '../images/mainPage/loginReg-bg-d@1x.png';
import dsctpImageLoginBg2x from '../images/mainPage/loginReg-bg-d@2x.png';

import tbltImageLoginBg from '../images/mainPage/loginReg-bg-t@1x.png';
import tbltImageLoginBg2x from '../images/mainPage/loginReg-bg-t@2x.png';

import mblImageLoginBg from '../images/mainPage/loginReg-bg-m@1x.png';
import mblImageLoginBg2x from '../images/mainPage/loginReg-bg-m@2x.png';

export const GlobalStyles = css`
  ${normalize}

  /*
  @font-face {
    font-family: 'Manrope';
    src: local('fonts'), url('./fonts/Manrope-Medium.ttf') format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Manrope';
    src: local('fonts'), url('./fonts/Manrope-Regular.ttf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Manrope';
    src: local('fonts'), url('./fonts/Manrope-Bold.ttf') format('truetype');
    font-weight: 700;
  }
*/

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.mainBackground};
    min-height: 100vh;
    height: 100%;
    font-style: normal;
    font-weight: 500;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  input {
    outline: none;
  }

  ::-webkit-scrollbar {
    /* 1 - скроллбар */
    width: 5px;
    height: 5px;
    background-color: #d1d1d1;
  }

  ::-webkit-scrollbar-thumb {
    /* 5 - ползунок */
    border-radius: 2px;
    background-color: #f59256;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 30px;
    list-style: none;
  }

  .page-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    color: inherit;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    min-width: 40px;
    height: 40px;
    padding: 0 6px;
    margin: 0 5px;
    color: rgba(0, 0, 0, 0.87);
    background-color: rgba(0, 0, 0, 0.04);
    -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    :hover,
    :focus {
      background-color: #ff6101;
      color: white;
    }
  }
  .pagination__link--active .page-link {
    background-color: #f59256;
    color: white;
  }
  .pagination__link {
    margin: 0 10px;
    font-size: 1.875rem;
    line-height: 1.43;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const Main = styled.main`
  flex: 1 0 auto;

  ${({ page }) =>
    page === 'main' &&
    css`
      background-image: url(${mblImageGirl}), url(${mblImageHomeBg});
      background-position: right 50% bottom 0, left 0 bottom 0;
      background-repeat: no-repeat, no-repeat;
      background-size: auto 68%, 100% auto;

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${mblImageGirl2x}), url(${mblImageHomeBg2x});
      }

      @media (min-width: 768px) {
        background-image: url(${tbltImageGirl}), url(${tbltImageHomeBg});
        background-position: right 50% bottom 0, left 0 bottom 0;
        background-repeat: no-repeat, no-repeat;
        background-size: auto 68%, 100% auto;

        @media (min-device-pixel-ratio: 2),
          (min-resolution: 192dpi),
          (min-resolution: 2dppx) {
          background-image: url(${tbltImageGirl2x}), url(${tbltImageHomeBg2x});
        }
      }

      @media (min-width: 1280px) {
        background-image: url(${dsctpImageGirl}), url(${dsctpImageHeart}),
          url(${dsctpImageHomeBg});
        background-position: right 20px bottom 0, right 38% bottom 90%,
          right 0 bottom 0;
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-size: auto 100%, 92px 89px, 100% auto;

        @media (min-device-pixel-ratio: 2),
          (min-resolution: 192dpi),
          (min-resolution: 2dppx) {
          background-image: url(${dsctpImageGirl2x}), url(${dsctpImageHeart2x}),
            url(${dsctpImageHomeBg2x});
        }
      }
    `}

  ${({ page }) =>
    page === 'login' &&
    css`
      background-image: url(${mblImageLoginBg});
      background-position: left 0 bottom 0;
      background-repeat: no-repeat;
      background-size: 100% auto;

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${mblImageLoginBg2x});
      }

      @media (min-width: 768px) {
        background-image: url(${tbltImageLoginBg});
        background-position: left 0 bottom 0;
        background-repeat: no-repeat;
        background-size: 100% auto;

        @media (min-device-pixel-ratio: 2),
          (min-resolution: 192dpi),
          (min-resolution: 2dppx) {
          background-image: url(${tbltImageLoginBg2x});
        }
      }

      @media (min-width: 1280px) {
        background-image: url(${dsctpImageLoginBg});
        background-position: right 0 bottom 0;
        background-repeat: no-repeat;
        background-size: 100% auto;

        @media (min-device-pixel-ratio: 2),
          (min-resolution: 192dpi),
          (min-resolution: 2dppx) {
          background-image: url(${dsctpImageLoginBg2x});
        }
      }
    `}
`;
