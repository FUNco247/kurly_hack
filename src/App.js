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
body {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-top: constant(safe-area-inset-top, 44px);
  padding-bottom: constant(safe-area-inset-top, 20px);
  padding-top: env(safe-area-inset-top, 44px);
  padding-bottom: env(safe-area-inset-top, 20px);
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
