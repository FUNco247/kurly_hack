import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4px 0px 0px 0px;
`;

const Article = styled.a`
  max-height: 86px;
  border-bottom: 0.5px solid #dedede;
  width: 100vw;
  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 34px 50px;
  #Wrap {
    display: flex;
    align-items: flex-start;
    width: 100%;
    grid-column: span 2;
  }
  #title {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.div`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  overflow: hidden;
  padding-left: 16px;
  max-width: 80vw;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const DateDiff = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-end;
  color: #999999;
  font-size: 13px;
  font-weight: 400;
`;

const Description = styled.div`
  font-size: 12px;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  line-height: 18px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #666666;
  padding: 0 16px;
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
          <div id="title">
            <Title>{article.title}</Title>
          </div>
          <DateDiff>
            {getDateDiff(currentDate, article.pubDate.split("T")[0]) == 0
              ? "오늘"
              : `${getDateDiff(
                  currentDate,
                  article.pubDate.split("T")[0]
                )}일전`}
          </DateDiff>
          <div id="Wrap">
            <Description>{article.description}</Description>
          </div>
        </Article>
      ))}
    </Wrapper>
  );
}

export default NewsBoard;
