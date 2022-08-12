import styled from "styled-components";
//import { motion, AnimatePresence } from "framer-motion";

/*const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;*/

const CategoryName = styled.div`
  position: relative;
  display: block;
  padding: 16px;
  div {
    font-size: 14px;
    font-weight: 400;
    color: #999999;
    display: block;
    margin: 2px 0px;
    width: 100%;
    height: 18px;
    span {
      &:first-child {
        float: left;
        font-size: 18px;
        font-weight: 600;
        color: #333333;
      }
      &:last-child {
        float: right;
        color: #5f0080;
      }
    }
  }
`;

const Slider = styled.div`
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const SliderRow = styled.div`
  display: flex;
  margin: 0px 0px 16px 16px;
  gap: 8px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Box = styled.div`
  position: relative;
  max-width: calc(40vw + 16px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 16px;
  flex-shrink: 0;
  scroll-snap-align: start;
  div {
    margin: 1px;
  }
`;

const ProductImg = styled.div`
  background-color: gray;
  min-width: 40vw;
  aspect-ratio: 1 / 1.301;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductName = styled.div`
  background-color: gray;
`;

const ProductPrice = styled.div`
  background-color: gray;
`;

function Products() {
  return (
    <>
      <CategoryName>
        <div>
          <span>지금 사면 좋은 상추</span>
          <span>전체보기</span>
        </div>
        <div>상추 가격이 오를것 같아요</div>
      </CategoryName>
      <Slider>
        <SliderRow>
          <Box>
            <ProductImg>사진</ProductImg>
            <ProductName>친환경 상추</ProductName>
            <ProductPrice>3000원</ProductPrice>
          </Box>
          <Box>
            <ProductImg>사진</ProductImg>
            <ProductName>친환경 배추</ProductName>
            <ProductPrice>4000원</ProductPrice>
          </Box>
          <Box>
            <ProductImg>사진</ProductImg>
            <ProductName>친환경 고추</ProductName>
            <ProductPrice>2000원</ProductPrice>
          </Box>
          <Box>
            <ProductImg>사진</ProductImg>
            <ProductName>친환경 상추</ProductName>
            <ProductPrice>3000원</ProductPrice>
          </Box>
          <Box>
            <ProductImg>사진</ProductImg>
            <ProductName>친환경 배추</ProductName>
            <ProductPrice>4000원</ProductPrice>
          </Box>
          <Box>
            <ProductImg>사진</ProductImg>
            <ProductName>친환경 고추</ProductName>
            <ProductPrice>2000원</ProductPrice>
          </Box>
        </SliderRow>
      </Slider>
    </>
  );
}

export default Products;
