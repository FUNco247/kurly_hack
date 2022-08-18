import styled from "styled-components";
import BottomMenu from "../components/global/BottomMenu";
import Navigator from "../components/global/Navigator";

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

function DetailPage() {
  return (
    <Wrapper>
      <Navigator />
      <Board>
        <h1>상세 페이지 입니다</h1>
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default DetailPage;
