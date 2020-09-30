import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #f5f5f5;
  }

  body {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    margin: 0;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  a {
    color: #0984e3;
    text-decoration:none;
    opacity:0.8;
    :hover {
      opacity:1;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
  }

  ul, li {
    margin:0;
    padding:0;
  }

  li {
    list-style:none;
  }
`;

export default GlobalStyle;
