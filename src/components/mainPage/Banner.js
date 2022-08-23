import styled from "styled-components";
import { Link } from "react-router-dom";
import mail_banner from "../ComponentImages/mail_banner.png";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
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
    color: #333333;
    font-size: 19px;
    font-weight: 600;
    padding: 0 0 8px 28px;
    &:first-child {
      padding-top: 30px;
    }
  }
  h2 {
    font-size: 13px;
    font-weight: 400;
    color: #333333;
    padding: 0 0 30px 28px;
  }
`;

function Banner({ count }) {
  return (
    <Link to={"/news"}>
      <Wrapper>
        <BannerIMG src={mail_banner} />
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
