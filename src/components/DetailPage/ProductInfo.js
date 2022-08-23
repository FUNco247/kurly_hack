import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ProductBox = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImg = styled.div`
  max-width: 400px;
  max-height: 740px;
  aspect-ratio: 1 / 1.301;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 1.36;
  h1 {
    padding-left: 16px;
    font-size: 14px;
    font-weight: 400;
    padding-top: 2px;
  }
  h2 {
    padding-left: 16px;
    color: #333333;
    font-size: 18px;
    font-weight: 500;
  }
  h3 {
    padding-left: 16px;
    color: #999999;
    font-size: 13px;
    font-weight: 500;
    margin: 24px 0px 2px 0px;
  }
`;

const PriceBox = styled.div`
  margin-top: 12px;
  height: 36px;
  width: 100vw;
  padding: 0 16px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    &:first-child {
      font-size: 24px;
      font-weight: 700;
      float: left;
      b {
        font-size: 15px;
        font-weight: 500;
      }
    }
    &:nth-child(2) {
      width: 146px;
      color: #5f0080;
      float: right;
      background-color: #f4f4f4;
    }
  }
`;

function ProductInfo({ product }) {
  return (
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
      <Info>
        <h3>샛별 배송</h3>
        <h2>{product.name}</h2>
        <h1>{product.contents}</h1>
        <PriceBox>
          <span>
            <span>{`${product.minPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
            <b>원</b>
          </span>
          <span>
            가격이 오르고 있어요 &nbsp;
            <FontAwesomeIcon icon={faAngleUp} />
          </span>
        </PriceBox>
      </Info>
    </ProductBox>
  );
}

export default ProductInfo;
