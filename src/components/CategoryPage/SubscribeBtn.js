import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #5f0080;
  min-width: 96vw;
  height: 52px;
  position: fixed;
  bottom: 47px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 2vw;
  border: none;
`;

function SubscribeBtn() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/subscribe");
  };
  return <Btn onClick={onClick}>가격 변동 알람 받기</Btn>;
}

export default SubscribeBtn;
