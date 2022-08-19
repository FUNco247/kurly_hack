import styled from "styled-components";
import Chart from "../components/CategoryPage/Chart";
import BottomMenu from "../components/global/BottomMenu";
import Navigator from "../components/global/Navigator";
import fakePriceDB from "../FakePriceDB";

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DetailPage() {
  return (
    <Wrapper>
      <Navigator />
      <Board>
        <Chart priceData={fakePriceDB} />
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default DetailPage;
