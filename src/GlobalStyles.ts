import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-weight: 400;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #484848;
  }
  body {
    margin: 0;
    padding: 0;
  }
  .green {
    color: #1BC681;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;