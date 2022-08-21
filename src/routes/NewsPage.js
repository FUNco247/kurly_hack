import styled from "styled-components";
import BottomMenu from "../components/global/BottomMenu";
import NewsBoard from "../components/Articles/NewsBoard";
import WhiteNavigator from "../components/global/WhiteNavigator";
import { useQuery } from "react-query";
import { getAllArticles } from "../api";

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

function NewsPage() {
  const { isLoading, data } = useQuery("allArticles", getAllArticles);
  console.log(isLoading, data);
  return (
    <Wrapper>
      <WhiteNavigator />
      <Board>
        {isLoading ? <h1>로딩중</h1> : <NewsBoard articles={data} />}
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default NewsPage;
