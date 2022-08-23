import styled from "styled-components";
import NewsBoard from "../components/NewsPage/NewsBoard";
import WhiteNewsBanner from "../components/NewsPage/WhiteNewsBanner";
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
  padding-top: 46px;
  padding-bottom: 45px;
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

  return status === "loading" ? null : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <Wrapper>
      <WhiteNewsBanner />
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
    </Wrapper>
  );
}

export default NewsPage;
