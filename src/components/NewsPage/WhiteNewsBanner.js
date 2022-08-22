import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

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
  height: 46px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  box-sizing: border-box;
`;

const HeaderMain = styled.div`
  background-color: white;
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
  color: black;
  font-size: 18px;
  font-weight: 600;
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

function WhiteNewsBanner() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <HeaderMain>
          <GoBackBtn onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} size="lg" />
          </GoBackBtn>
          <SelectMarketBtn>컬리버드 소식</SelectMarketBtn>
          <LocationAndCart>
            <FontAwesomeIcon icon={faCartPlus} size="lg" />
          </LocationAndCart>
        </HeaderMain>
      </Header>
    </>
  );
}
export default WhiteNewsBanner;
