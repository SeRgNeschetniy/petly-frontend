import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { normalize } from 'styled-normalize';

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
    background: ${theme.colors.mainBackground};
    min-height: 100vh;
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
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  min-width: 320px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;
