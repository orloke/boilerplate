import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next{
    height: 100%;
  }

  @media (max-width: 1068px) {
      html {
          font-size: 93.75%;
      }
    }
    @media (max-width: 768px) {
      html {
          font-size: 87.5%;
      }
    }

    body{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
