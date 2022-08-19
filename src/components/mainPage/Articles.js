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
  border-bottom: solid 0.5px gray;
  width: 100%;
  padding-bottom: 8px;
  margin-top: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #999999;
`;

function Articles({ articles }) {
  return (
    <Wrapper>
      {articles.map((article) => (
        <Article target={"_blank"} href={article.url}>
          {article.title}
        </Article>
      ))}
    </Wrapper>
  );
}

export default Articles;
