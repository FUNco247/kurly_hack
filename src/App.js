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
