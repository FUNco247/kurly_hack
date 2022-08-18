import styled from "styled-components";
import BottomMenu from "../components/global/BottomMenu";
import Navigator from "../components/global/Navigator";
import Products from "../components/mainPage/Products";

const Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Board = styled.div`
  padding-top: 88px;
  padding-bottom: 45px;
  height: 95vh;
`;

function MainPage() {
  return (
    <Wrapper>
      <Navigator />
      <Board>
        <Products />
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default MainPage;
