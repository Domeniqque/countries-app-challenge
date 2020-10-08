import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #121213;
    --grey100: #f6f6f6;
    --grey300: #495057;
    --grey400: #3A3A3A;
    --primary: #5C5CFF;
  }

  * {
    outline: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
    background-color: var(--grey100);
    font-size: 14px;
    line-height: 28px;
  }

  @media screen and (max-width: 576px) {
    html, body, #root {
      font-size: 10px !important;
    }
  }

  body, input, button {
    font-family: Helvetica, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
