import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', serif;
  }

  body {
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration:none;
  }

  li{
    list-style-type: none;
  }
`;
