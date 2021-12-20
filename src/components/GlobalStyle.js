import { createGlobalStyle } from 'styled-components';
//import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #2d2827;
  }

  main{
    margin-top: 8vh;
  }
`;
// ${reset}을 GlobalStyle 안에 쓰면 reset 됨

export default GlobalStyle;
