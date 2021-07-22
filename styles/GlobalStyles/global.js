import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: sans-serif;
    font-size: 1.6rem;
    background: white;
    color: black;
    margin: auto;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  main{
    margin-top: 60px;
  }
`;

export default GlobalStyles;