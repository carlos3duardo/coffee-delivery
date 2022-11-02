import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme.baseTitle}
  }

  button {
    font-size: 0.75rem;
    font-weight: 400;
    padding: 0.5rem 0.75rem;
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${(props) => props.theme.baseButton};
    color: ${(props) => props.theme.baseText};
  }
`
