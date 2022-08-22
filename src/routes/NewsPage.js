import styled from "styled-components";
import BottomMenu from "../components/global/BottomMenu";
import NewsBoard from "../components/Articles/NewsBoard";
import WhiteNavigator from "../components/Articles/WhiteNavigator";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { getAllArticles } from "../api";
import { useEffect } from "react";

const Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Board = styled.div`
  padding-top: 88px;
  padding-bottom: 45px;
  height: 85vh;
`;

function NewsPage() {
  const { ref, inView } = useInView();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ["allArticles"],
    ({ pageParam = 1 }) => getAllArticles(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) {
          return lastPage.nextPage;
        } else {
          return undefined;
        }
      },
      getPreviousPageParam: (firstPage) => firstPage.prevCursor,
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <Wrapper>
      <WhiteNavigator />
      <Board>
        {data.pages.map((page, index) => (
          <NewsBoard articles={page.content} key={index} />
        ))}
        <button
          style={{ border: "none", backgroundColor: "white", color: "white" }}
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default NewsPage;
