import styled from "styled-components";
import { useQuery } from "react-query";
import { getAllItems } from "../api";
import BottomMenu from "../components/global/BottomMenu";
import Navigator from "../components/global/Navigator";
import Products from "../components/mainPage/Products";
import Articles from "../components/mainPage/Articles";
//import fakeProductDB from "../FakeProductDB";
import Banner from "../components/mainPage/Banner";
import BarChart from "../components/mainPage/BarChart";

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

const Box = styled.div``;

const getNewsCount = (data) => {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    count = count + data[i].news.length;
  }
  count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return count;
};

const setPriceforBarChart = (data) => {
  let priceIncRatio = [];
  for (let i = 0; i < data.length; i++) {
    const titleStringsArr = data[i].title.split(" ");
    const title = titleStringsArr[titleStringsArr.length - 1];
    const priceDataArr = data[i].priceStatisticsRes;
    const increaseAvg =
      ((priceDataArr[priceDataArr.length - 1].price -
        priceDataArr[priceDataArr.length - 8].price) *
        100) /
      priceDataArr[priceDataArr.length - 8].price;
    priceIncRatio.push({ x: title, y: increaseAvg.toFixed(1) });
  }
  return priceIncRatio;
};

function MainPage() {
  const { isLoading, data } = useQuery("allItems", getAllItems);
  //console.log(isLoading, data);
  return (
    <Wrapper>
      <Navigator />
      <Board>
        {isLoading ? null : (
          <>
            <Banner count={getNewsCount(data)} />
            <BarChart priceData={setPriceforBarChart(data)} />
            {data.map((product, index) => (
              <Box key={`${index + 98765}`}>
                <Products
                  title={product.title}
                  subtitle={product.subtitle}
                  categoryId={product.issueCategoryId}
                  items={product.products}
                />
                <Articles articles={product.news.slice(0, 3)} />
              </Box>
            ))}{" "}
          </>
        )}
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default MainPage;
