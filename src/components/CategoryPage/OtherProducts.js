import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  padding: 0 16px 0 16px;
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

function OtherProdunts({ products }) {
  return (
    <Wrapper>
      {products.map((product) => (
        <Link to={`/detail/${product.id}`} key={product.id}>
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
  );
}

export default OtherProdunts;
