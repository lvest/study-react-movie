import { createGlobalStyle } from 'styled-components';
//import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;
// ${reset}을 GlobalStyle 안에 쓰면 reset 됨

export default GlobalStyle;
