import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: repeat(3, 1fr);
  gap: 8px;
  padding: 24px 0;
`;

const TitleBox = styled.div`
  grid-row: span 2;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  padding-left: 16px;
`;

const DeliveryTypeBox = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
`;

const ArriveBox = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  line-height: 1.5em;
`;

const SellerBox = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  padding-left: 16px;
`;

const SellerNameBox = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
`;

function DeliveryInfo() {
  return (
    <Wrapper>
      <TitleBox>배송</TitleBox>
      <DeliveryTypeBox>샛별배송</DeliveryTypeBox>
      <ArriveBox>
        23시 전 주문 시 내일 아침 7시 전 도착 <br />
        (대구·부산·울산 샛별배송 운영시간 별도 확인){" "}
      </ArriveBox>
      <SellerBox>판매자</SellerBox>
      <SellerNameBox>컬리</SellerNameBox>
    </Wrapper>
  );
}

export default DeliveryInfo;
