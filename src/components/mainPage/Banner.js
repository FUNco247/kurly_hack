import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-height: 140px;
  overflow: hidden;
  position: relative;
  background-color: #5f0080;
`;

const BannerIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerText = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  h1 {
    color: white;
    font-size: 19px;
    font-weight: 400;
    padding: 0 0 8px 28px;
    &:first-child {
      padding-top: 30px;
    }
  }
  h2 {
    font-size: 13px;
    color: white;
    padding: 0 0 30px 28px;
  }
`;

function Banner({ count }) {
  return (
    <Link to={"/news"}>
      <Wrapper>
        <BannerIMG
          src={
            "https://media.istockphoto.com/photos/mailbox-red-color-open-with-blank-street-number-label-blur-house-3d-picture-id1358837831?b=1&k=20&m=1358837831&s=170667a&w=0&h=zniHdFUsmrart43o3vgz9q7simInESqa0BXnH4zPVFI="
          }
        />
        <BannerText>
          <h1>컬리가 알려주는 식탁물가</h1>
          <h1>{count}개 소식 분석중</h1>
          <h2>자세히 보기</h2>
        </BannerText>
      </Wrapper>
    </Link>
  );
}

export default Banner;
