import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00FF9450;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #333;
  }
    
  }
`;

export default GlobalStyle;
