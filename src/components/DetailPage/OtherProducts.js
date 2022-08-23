import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  padding: 0 16px 0 16px;
`;

const CategoryName = styled.div`
  width: 100vw;
  position: relative;
  display: block;
  padding: 32px 16px 0px 16px;
  div {
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    display: block;
    margin: 2px 0px;
    width: 100%;
    height: 18px;
    &:first-child {
      margin-bottom: 16px;
    }
    span {
      &:first-child {
        float: left;
        font-size: 13px;
        font-weight: 400;
        color: #333333;
      }
      &:last-child {
        float: right;
        font-size: 13px;
        font-weight: 400;
        color: #333333;
      }
    }
  }
`;

const ProductBox = styled.div`
  width: calc(50vw-16px);
  margin: 16px 0 22px 0;
`;

const ProductImg = styled.div`
  background-color: gray;
  min-width: 45vw;
  max-width: 60vw;
  aspect-ratio: 1 / 1.301;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 1.36;
  h1 {
    font-size: 14px;
    font-weight: bold;
    padding-top: 2px;
  }
  h2 {
    color: #333333;
    font-size: 14px;
    font-weight: 400;
  }
  h3 {
    color: #999999;
    font-size: 12px;
    font-weight: 500;
    margin: 2px 0px 2px 0px;
  }
`;

function DetailPageOtherProdunts({ products }) {
  return (
    <>
      <CategoryName>
        <div>다른 고객이 함께 본 상품</div>
      </CategoryName>
      <Wrapper>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductBox>
              <ProductImg>
                <img
                  src={
                    product.fileName
                      ? `http://3.34.2.197:8080/${product.fileName}`
                      : "https://t1.daumcdn.net/cfile/tistory/2363B54A560BDA7605"
                  }
                  alt="사진"
                />
              </ProductImg>
              <ProductInfo>
                <h3>샛별 배송</h3>
                <h2>{product.name}</h2>
                <h1>
                  {`${product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}
                </h1>
              </ProductInfo>
            </ProductBox>
          </Link>
        ))}
      </Wrapper>
    </>
  );
}

export default DetailPageOtherProdunts;
