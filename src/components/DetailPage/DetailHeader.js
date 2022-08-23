import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  margin: 0;
  padding: 0;
  padding-top: constant(safe-area-inset-top, 40px);
  padding-bottom: constant(safe-area-inset-top, 25px);
  padding-top: env(safe-area-inset-top, 40px);
  padding-bottom: env(safe-area-inset-top, 25px);
  height: 88px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  box-sizing: border-box;
  background-color: white;
`;

const HeaderMain = styled.div`
  color: white;
  grid-row: span 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0px 0px 0px 16px;
`;

const GoBackBtn = styled.div`
  height: 30px;
  font-size: 18px;
  color: black;
`;

const SelectMarketBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 28px;
  min-width: 71px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  padding: 0px 10px 0px 13px;
  border-radius: 15px;
`;

const LocationAndCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  svg {
    margin-right: 16px;
  }
`;

const HeaderMenu = styled.div`
  height: 44px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.5px #999999;
  font-size: 15px;
  font-weight: 500;
  color: #666666;
  div {
    &:first-child {
      margin-left: 24px;
      color: #5f0080;
      border-bottom: solid 2px #5f0080;
    }
    &:last-child {
      margin-right: 24px;
    }
  }
`;

const Menu = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
`;

function DetailHeader({ productName }) {
  const param = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <HeaderMain>
          <GoBackBtn onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} size="lg" />
          </GoBackBtn>
          <SelectMarketBtn>{productName}</SelectMarketBtn>
          <LocationAndCart>
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </LocationAndCart>
        </HeaderMain>
        <HeaderMenu>
          <Menu>상품설명</Menu>
          <Menu>상세정보</Menu>
          <Menu>후기</Menu>
          <Menu>문의</Menu>
        </HeaderMenu>
      </Header>
    </>
  );
}
export default DetailHeader;
