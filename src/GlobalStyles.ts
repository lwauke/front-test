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
  .blue {
    color: #43B7FF;
  }
  a {
    text-decoration: none;
  }
  .w-600 {
    font-weight: 600;
  }
`;

export default GlobalStyle;