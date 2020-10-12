import { createGlobalStyle } from 'styled-components';

import 'react-placeholder/lib/reactPlaceholder.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #121213;
    --grey100: #f6f6f6;

    --light-blue: #5C5CFF;
    --purple: #6d5dcf;
    --grey200: #f6f6f6;
    --grey300: #868e96;
    --grey400: #495057;
    --red: #cd201f;
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
    background-color: var(--grey200);
    font-size: 14px;
    line-height: 20px;
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
    color: var(--light-blue);
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast--success {
    background: var(--purple);
  }
`;
