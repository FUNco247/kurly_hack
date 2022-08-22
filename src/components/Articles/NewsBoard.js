import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4px 16px 0px 16px;
`;

const Article = styled.a`
  max-height: 84px;
  border-bottom: 0.5px solid #999999;
  width: 100%;
  padding: 0px 8px 8px 8px;
  margin-top: 16px;
  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 34px 50px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10%;
  white-space: nowrap;
`;
const DateDiff = styled.div`
  color: #999999;
  font-size: 13px;
  font-weight: 400;
`;

const Description = styled.div`
  grid-column: span 2;
  font-size: 12px;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 2em;
  color: #666666;
`;

const getDateDiff = (a, b) => {
  const laterDay = new Date(a);
  const earlierDay = new Date(b);
  const dateDiff = Math.abs(laterDay - earlierDay) / 1000 / 60 / 60 / 24;
  return dateDiff;
};

function NewsBoard({ articles }) {
  const currentDate = new Date().toISOString().slice(0, 10);
  //console.log(articles);
  return (
    <Wrapper>
      {articles.map((article) => (
        <Article target={"_blank"} href={article.url} key={article.id + "news"}>
          <Title>{article.title}</Title>
          <DateDiff>
            {getDateDiff(currentDate, article.pubDate.split("T")[0])}일전
          </DateDiff>
          <Description>{article.description}</Description>
        </Article>
      ))}
    </Wrapper>
  );
}

export default NewsBoard;
