import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

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
  }

  body, input, button {
    font: 14px, 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 28px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
