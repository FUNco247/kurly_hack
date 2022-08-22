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
  grid-template-rows: 46px 44px;
  box-sizing: border-box;
  border-bottom: solid 0.5px #999999;
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
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
          </LocationAndCart>
        </HeaderMain>
      </Header>
    </>
  );
}
export default DetailHeader;
