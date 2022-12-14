import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CategoryName = styled.div`
  position: relative;
  display: block;
  padding: 16px 16px 16px 16px;
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
  margin: 0px 0px 8px 16px;
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
  scroll-snap-align: start;
  div {
    margin: 1px;
  }
`;

const ProductImg = styled.div`
  background-color: gray;
  min-width: 40vw;
  max-width: 60vw;
  aspect-ratio: 1 / 1.301;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoBox = styled.div`
  padding-top: 8px;
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
  padding-top: 1px;
`;

function Products({ title, categoryId, subtitle, items }) {
  return (
    <>
      <CategoryName>
        <Link to={`/category/${categoryId}`}>
          <div>
            <span>{title}</span>
            <span>
              전체보기 <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
        </Link>
      </CategoryName>
      <Slider>
        <SliderRow>
          {items.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id + "unique"}>
              <Box>
                <ProductImg>
                  <img
                    src={
                      item.fileName
                        ? `http://3.34.2.197:8080/${item.fileName}`
                        : "https://t1.daumcdn.net/cfile/tistory/2363B54A560BDA7605"
                    }
                    alt="사진"
                  />
                </ProductImg>
                <InfoBox>
                  <ProductName>
                    <h3>{item.name}</h3>
                  </ProductName>
                  <ProductPrice>
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    원
                  </ProductPrice>
                </InfoBox>
              </Box>
            </Link>
          ))}
        </SliderRow>
      </Slider>
    </>
  );
}

export default Products;
