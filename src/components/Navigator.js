import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 88px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
`;

const HeaderMain = styled.div`
  background-color: #5f0080;
  color: white;
  grid-row: span 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0px 0px 0px 16px;
`;

const Logo = styled.div`
  height: 30px;
  font-size: 28px;
`;

const SelectMarketBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 28px;
  min-width: 71px;
  background-color: white;
  color: #5f0080;
  font-size: 13px;
  font-weight: 600;
  padding: 0px 10px 0px 13px;
  border-radius: 15px;
`;

const LocationAndCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 16px;
  }
`;

const HeaderMenu = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.5px #999999;
  div {
    &:first-child {
      margin-left: 16px;
      color: #5f0080;
      border-bottom: solid 2px #5f0080;
    }
    &:last-child {
      margin-right: 16px;
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

function Navigator() {
  return (
    <>
      <Header>
        <HeaderMain>
          <Logo>Kurly</Logo>
          <SelectMarketBtn>마켓컬리</SelectMarketBtn>
          <LocationAndCart>
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
            <FontAwesomeIcon icon={faCartPlus} size="lg" />
          </LocationAndCart>
        </HeaderMain>
        <HeaderMenu>
          <Menu>컬리추천</Menu>
          <Menu>신상품</Menu>
          <Menu>베스트</Menu>
          <Menu>알뜰쇼핑</Menu>
          <Menu>특가/혜택</Menu>
        </HeaderMenu>
      </Header>
    </>
  );
}
export default Navigator;
