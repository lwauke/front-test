import { createGlobalStyle } from "styled-components";

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
  h1, h2, h3, h4, h5, h6, p, img, ul, li {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  ol, ul {
    list-style: none;
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
  .relative {
    position: relative;
  }
  .align-start {
    text-align: start;
  }
`;

export default GlobalStyle;
