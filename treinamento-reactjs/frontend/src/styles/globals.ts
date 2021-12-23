import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}

:root {
  --primary: #263C9E;
  --secondary: #1263E6;
  --mediumBase: #608DE6;
  --lightBase: #FFFFFF;
  --darkBase: #000000;
  --backGround: #F0F0F0;
  --darkYellow: #CDED08;
  --lightYellow: #EDFC92;
  --darkGreen: #15EF38;
  --lightGreen: #ACF4A0;
  --red: #FF0000;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--backGround);
  color: var(--darkBase);
}

body, input, textarea, button {
  font: 400 1rem 'Roboto', sans-serif;
}


a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

`;
