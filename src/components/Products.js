import styled from "styled-components";
import { Link } from "react-router-dom";
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
  justify-content: space-between;
  padding-bottom: 16px;
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

const InfoBox = styled.div`
  padding: 8px 0px;
`;

const ProductName = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 1.36;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  h3 {
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const ProductPrice = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-top: 8px;
`;

function Products() {
  return (
    <>
      <CategoryName>
        <Link to={`/123`}>
          <div>
            <span>지금 사면 좋은 상추</span>
            <span>전체보기</span>
          </div>
          <div>상추 가격이 오를것 같아요</div>
        </Link>
      </CategoryName>
      <Slider>
        <SliderRow>
          <Box>
            <ProductImg>사진</ProductImg>
            <InfoBox>
              <ProductName>
                <h3>이름이 기이이인 어디선가 온 친환경 상추 120g</h3>
              </ProductName>
              <ProductPrice>3000원</ProductPrice>
            </InfoBox>
          </Box>
          <Box>
            <ProductImg>사진</ProductImg>
            <InfoBox>
              <ProductName>
                <h3>친환경 상추 120g</h3>
              </ProductName>
              <ProductPrice>3000원</ProductPrice>
            </InfoBox>
          </Box>
          <Box>
            <ProductImg>사진</ProductImg>
            <InfoBox>
              <ProductName>
                <h3>
                  이름이 아주우우우 너어엉어무우우우 기이이인 어디선가 온 친환경
                  상추 120g
                </h3>
              </ProductName>
              <ProductPrice>3000원</ProductPrice>
            </InfoBox>
          </Box>
        </SliderRow>
      </Slider>
    </>
  );
}

export default Products;
