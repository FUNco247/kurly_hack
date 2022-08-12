import styled from "styled-components";
import BottomMenu from "../components/BottomMenu";
import Navigator from "../components/Navigator";
import Products from "../components/Products";

const Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProductBox = styled.div`
  padding-top: 88px;
  padding-bottom: 45px;
  height: 100vh;
`;

function MainPage() {
  return (
    <Wrapper>
      <Navigator />
      <ProductBox>
        <Products />
        <Products />
        <Products />
        <Products />
      </ProductBox>
      <BottomMenu />
    </Wrapper>
  );
}

export default MainPage;
