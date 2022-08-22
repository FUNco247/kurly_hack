import styled from "styled-components";

const Btn = styled.div`
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
`;

function SubscribeBtn() {
  return <Btn>가격 변동 알람 받기</Btn>;
}

export default SubscribeBtn;
