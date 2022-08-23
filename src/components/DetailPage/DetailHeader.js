import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
  display: flex;
  align-items: center;
  justify-content: center;
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
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.9898 7.93878L21.8742 16.9377H9.74865L7.64087 7.93878H23.9898Z"
                stroke="black"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M19.9764 22.9188C20.8956 22.9188 21.6408 22.1736 21.6408 21.2543C21.6408 20.3351 20.8956 19.5899 19.9764 19.5899C19.0571 19.5899 18.312 20.3351 18.312 21.2543C18.312 22.1736 19.0571 22.9188 19.9764 22.9188Z"
                stroke="black"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M11.6464 22.9188C12.5657 22.9188 13.3109 22.1736 13.3109 21.2543C13.3109 20.3351 12.5657 19.5899 11.6464 19.5899C10.7272 19.5899 9.98199 20.3351 9.98199 21.2543C9.98199 22.1736 10.7272 22.9188 11.6464 22.9188Z"
                stroke="black"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M4.01642 5.0921H6.97197L8.34086 10.9254"
                stroke="black"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
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
