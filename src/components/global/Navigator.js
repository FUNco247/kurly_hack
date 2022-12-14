import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-family: "Dancing Script", cursive;
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
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.5px #999999;
  font-size: 15px;
  font-weight: 500;
  color: #666666;
  div {
    &:first-child {
      margin-left: 16px;
    }
    &:last-child {
      color: #5f0080;
      border-bottom: solid 2px #5f0080;
      margin-right: 16px;
      margin-left: 0;
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
          <Link to={`/`}>
            <Logo>
              <svg
                width="58"
                height="30"
                viewBox="0 0 82 42"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fillRule="nonzero" fill="none">
                  <path d="M0 0h82v42H0z" />
                  <path
                    d="M62.5.965c1.026-.557 2.466-.718 3.356.107.89.825.676 2.048 0 3.973 0 0-1.505 4.066-3.055 8.262l-.398 1.08c-1.414 3.83-2.762 7.487-2.927 7.963-1.498 4.245 1.967 4.122 4.024-.152 1.159-2.394 2.644-6.357 2.644-6.357.524-1.563.682-2.504.359-2.828-.107-.113.045-.252.18-.323 2.269-1.149 4.63-.072 3.336 3.31l-.054.138c-.387.978-2.68 6.733-2.68 6.733-.676 1.66-.595 3.236.418 3.236.686-.004 1.46-.385 2.304-1.088 1.818-1.504 3.222-4.312 3.727-5.454.23-.508 1.087-2.42 1.766-4.361.236-.665.369-1.36.395-2.065a.443.443 0 0 1 .194-.459 3.578 3.578 0 0 1 1.67-.42 1.805 1.805 0 0 1 1.465.705c.443.598.566 1.579.103 2.808-.12.32-3.775 9.958-3.775 9.958v.026c2.041-1.223 3.87-1.313 4.953-.854l-.003-.013c1.495.647 1.99 2.44.938 3.559-.103.11-.362.084-.362-.09-.094-1.253-2.517-3.495-6.109-1.075l-.145.385-1.068 2.808c-2.62 7.018-5.403 12.136-9.415 11-2.688-.76-2.377-4.607.515-7.79a54.9 54.9 0 0 1 6.49-5.898c.068-.188.13-.35.188-.511.278-.78.491-1.434.792-2.265l.159-.518c-.178.2-.498.573-.712.812-.712.8-2.494 2.757-5.329 2.207l-.234-.052c-2.05-.508-2.608-1.986-2.655-3.277-2.142 2.656-4.351 3.426-5.807 3.39-1.948-.048-3.378-1.514-2.427-4.29 1.058-3.106 5.5-15.332 6.795-19 .485-1.58.666-2.58.184-2.974-.123-.103.052-.265.2-.346zm8.364 28.778c-1.103.88-5.526 4.53-6.752 7.441-.505 1.197-.376 2.149.488 2.233 1.96.194 4.012-3.818 6.228-9.512zM16.028 5.352c-.087.332-1.319 3.86-2.701 7.749l-.209.586-.21.589-.215.604c4.691-1.123 13.064-6.57 14.035-10.085.12-.161.29-.22.566-.035.495.33.686 1.155.495 1.918-.764 3.038-6.416 7.341-11.379 9.554.612 1.637 2.682 6.267 4.206 9.111 1.663 3.119 3.42 4.575 6.147 4.737 1.46.085 3.014-.447 3.893-1.22l.148-.14-.013.03c.194-.204.511.077.366.323a6.5 6.5 0 0 1-4.992 2.867c-6.345.427-8.774-3.87-13.304-14.494-.366.126-.809.288-1.255.45-.075.187-2.07 5.642-2.13 5.823-.944 2.87-1.005 4.442-.358 4.895.145.09.074.333-.178.414-2.527.796-4.853-.696-3.559-4.442 1.161-3.316 5.69-16.18 6.914-19.626.427-1.294.197-2.125-.492-2.306C8.506 1.78.877 8.749 1.971 15.184c.19 1.12.98 1.747 1.378 1.663a.133.133 0 0 1 .156.159 1.508 1.508 0 0 1-1.845 1.032C.49 17.782.107 16.527.043 15.88-.601 9.22 6.148 1.23 12.389.58c2.378-.25 4.61.96 3.64 4.772zm24.04 9.913-.06.207-2.83 8.16c-.304.85-.1 1.737.501 1.902 1.757.482 4.028-2.145 5.131-4.733a67.794 67.794 0 0 0 1.476-3.815c.582-1.643 1.106-3.183.783-3.908-.075-.168.045-.256.223-.35.505-.255 2.226-.825 3.141.068.695.674.609 1.771-.03 3.437l-.096.242.22-.273c2.703-3.3 4.792-4.292 6.563-3.597l.147.062c2.381 1.074 1.146 5.215-2.116 5.48-.2.017-.356-.126-.158-.407.395-.605.356-1.909-.796-2.022-1.152-.113-2.83 1.207-4.038 2.844-1.084 1.45-2.2 3.911-3.322 7.273-.272.818-.143 1.012-.11 1.067a.1.1 0 0 1 0 .094c-.143.272-.965.596-1.76.596-1.625-.007-2.291-.945-1.967-2.437-1.848 1.764-3.711 2.614-5.355 2.466a2.524 2.524 0 0 1-2.236-3.103c-1.426 1.809-3.542 3.268-5.697 3.067-2.155-.2-3.5-1.666-2.802-4.788.59-2.598 1.592-5.29 2.207-7.027.514-1.456.618-2.407.294-2.75-.103-.114.055-.25.194-.324 1.69-.886 4.394-.314 3.63 2.09-.802 2.527-2.255 6.49-2.55 7.4-.737 2.287-.29 3.523.755 3.58 1.045.06 2.43-.96 3.42-2.503 1.76-2.524 2.581-5.685 3.377-7.882.204-.56.527-1.866.185-2.352-.091-.123.067-.258.275-.372 1.537-.849 4.285-.64 3.402 2.608z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </Logo>
          </Link>
          <SelectMarketBtn>????????????</SelectMarketBtn>
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
                d="M14.0047 23.3333C14.0047 23.3333 6.76666 17.5342 6.76666 11.9047C6.76666 9.98502 7.52924 8.14401 8.88662 6.78662C10.244 5.42923 12.085 4.66666 14.0047 4.66666C15.9243 4.66666 17.7653 5.42923 19.1227 6.78662C20.4801 8.14401 21.2427 9.98502 21.2427 11.9047C21.2427 17.5342 14.0047 23.3333 14.0047 23.3333Z"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.9316 13.9277C15.1274 13.9277 16.0969 12.9582 16.0969 11.7623C16.0969 10.5664 15.1274 9.59698 13.9316 9.59698C12.7357 9.59698 11.7662 10.5664 11.7662 11.7623C11.7662 12.9582 12.7357 13.9277 13.9316 13.9277Z"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
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
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M19.9764 22.9188C20.8956 22.9188 21.6408 22.1736 21.6408 21.2543C21.6408 20.3351 20.8956 19.5899 19.9764 19.5899C19.0571 19.5899 18.312 20.3351 18.312 21.2543C18.312 22.1736 19.0571 22.9188 19.9764 22.9188Z"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M11.6464 22.9188C12.5657 22.9188 13.3109 22.1736 13.3109 21.2543C13.3109 20.3351 12.5657 19.5899 11.6464 19.5899C10.7272 19.5899 9.98199 20.3351 9.98199 21.2543C9.98199 22.1736 10.7272 22.9188 11.6464 22.9188Z"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M4.01642 5.0921H6.97197L8.34086 10.9254"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </LocationAndCart>
        </HeaderMain>
        <HeaderMenu>
          <Menu>????????????</Menu>
          <Menu>?????????</Menu>
          <Menu>?????????</Menu>
          <Menu>??????/??????</Menu>
          <Link to={"/"}>
            <Menu>????????????</Menu>
          </Link>
        </HeaderMenu>
      </Header>
    </>
  );
}
export default Navigator;
