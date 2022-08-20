import styled from "styled-components";

const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:last-child {
    padding-bottom: 45px;
  }
`;

const Article = styled.a`
  border-bottom: 0.5px solid #999999;
  width: 100%;
  padding-bottom: 8px;
  margin-top: 8px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1-0.273c2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const DateDiff = styled.div`
  color: #999999;
  font-size: 13px;
  font-weight: 400;
  padding-top: 2px;
`;
const getDateDiff = (a, b) => {
  const laterDay = new Date(a);
  const earlierDay = new Date(b);
  const dateDiff = Math.abs(laterDay - earlierDay) / 1000 / 60 / 60 / 24;
  return dateDiff;
};

function Articles({ articles }) {
  const currentDate = new Date().toISOString().slice(0, 10); //"2022-08-21"
  return (
    <Wrapper>
      {articles.map((article) => (
        <Article target={"_blank"} href={article.url} key={article.issueId}>
          <Title>{article.title}</Title>
          <DateDiff>
            {getDateDiff(currentDate, article.pubDate.split("T")[0])}일전
          </DateDiff>
        </Article>
      ))}
    </Wrapper>
  );
}

export default Articles;
