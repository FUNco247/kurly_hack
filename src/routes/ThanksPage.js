import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mail_square from "./RouteImages/mail_square.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
`;

const Notice = styled.div`
  margin: 92px 0 0 16px;
  color: #333333;
  font-size: 24px;
  font-weight: 500;
  h1 {
    padding-top: 8px;
    font-weight: 400;
    font-size: 15px;
    color: #666666;
  }
`;

const ImgBox = styled.div`
  padding-top: 24px;
  align-self: center;
  width: 343px;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const ConfirmBtn = styled.button`
  margin-top: 48px;
  align-self: center;
  width: 91vw;
  height: 48px;
  background-color: #560c7b;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

function ThanksPage() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Notice>
        가격 변동 알림을 설정했어요<h1>가격이 변동되면 알려드릴게요.</h1>
      </Notice>
      <ImgBox>
        <img src={mail_square} alt={"구독성공"} />
      </ImgBox>
      <ConfirmBtn onClick={onClick}>확인</ConfirmBtn>
    </Wrapper>
  );
}

export default ThanksPage;
