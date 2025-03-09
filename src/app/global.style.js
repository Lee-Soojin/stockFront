import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: "Pretendard", "sans-serif";
  }

  html,body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    scrollbar-width: thin;
    scrollbar-color: #888888 #f0f0f0;
  }

  body {
    display: block;
    *{
      box-sizing: border-box;
      margin: 0;
    }

    > div {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      padding-top: 80px;
      background-color: #f6f6f7;
    }
  }
  
`;

export default GlobalStyle;
