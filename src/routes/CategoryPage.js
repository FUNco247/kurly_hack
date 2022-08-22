import styled from "styled-components";
import { getCategory } from "../api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Chart from "../components/CategoryPage/LineChart";
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
  const { categoryId } = useParams();
  const { isLoading, data } = useQuery(["coinData", categoryId], () =>
    getCategory(categoryId)
  );
  console.log(isLoading, data);
  return (
    <Wrapper>
      <Navigator />
      <Board>
        <Chart priceData={fakePriceDB.priceStatisticsRes} />
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default DetailPage;
