import styled from "styled-components";
import BottomMenu from "../components/global/BottomMenu";
import Navigator from "../components/global/Navigator";
import Products from "../components/mainPage/Products";
import Articles from "../components/mainPage/Articles";
import fakeProductDB from "../FakeProductDB";

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

function MainPage() {
  return (
    <Wrapper>
      <Navigator />
      <Board>
        {fakeProductDB.map((product) => (
          <>
            <Products
              key={product.categoryId}
              title={product.title}
              subtitle={product.subtitle}
              categoryId={product.categoryId}
              items={product.items}
            />
            <Articles articles={product.news} />
          </>
        ))}
      </Board>
      <BottomMenu />
    </Wrapper>
  );
}

export default MainPage;
