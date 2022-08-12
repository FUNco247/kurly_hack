import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  html, button, input, select, textarea {
    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
}
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
