import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  background-color: white;
  position: fixed;
  bottom: 0;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Like = styled.div`
  width: 14.5vw;
  height: 52px;
  border-radius: 6px;
  border: solid 1px #5f0080;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.div`
  width: 77vw;
  height: 52px;
  border-radius: 6px;
  background-color: #5f0080;
  color: white;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    background-color: #5f0080;
  }
`;

const onClick = () => {
  alert("구매해주셔서 감사합니다! 컬리버드 화이팅!");
};

function PurchaseBtn() {
  return (
    <Wrapper>
      <Like>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.807 7.863C25.2705 7.32624 24.6335 6.90045 23.9324 6.60994C23.2313 6.31944 22.4799 6.16991 21.721 6.16991C20.9621 6.16991 20.2106 6.31944 19.5096 6.60994C18.8085 6.90045 18.1715 7.32624 17.635 7.863L16 9.497L14.365 7.863C13.8299 7.31958 13.1926 6.88745 12.4897 6.59151C11.7868 6.29558 11.0323 6.14169 10.2697 6.13872C9.50704 6.13575 8.75137 6.28375 8.04621 6.57421C7.34105 6.86466 6.70035 7.29182 6.16105 7.83105C5.62175 8.37028 5.19452 9.01093 4.90398 9.71605C4.61344 10.4212 4.46533 11.1768 4.46821 11.9395C4.47109 12.7021 4.62489 13.4566 4.92074 14.1595C5.21659 14.8624 5.64864 15.4999 6.192 16.035L7.826 17.669L15.292 25.136C15.3849 25.229 15.4952 25.3027 15.6166 25.3531C15.738 25.4034 15.8681 25.4293 15.9995 25.4293C16.1309 25.4293 16.261 25.4034 16.3824 25.3531C16.5038 25.3027 16.6141 25.229 16.707 25.136L24.173 17.669L25.807 16.035C26.3438 15.4985 26.7695 14.8615 27.0601 14.1604C27.3506 13.4594 27.5001 12.7079 27.5001 11.949C27.5001 11.1901 27.3506 10.4386 27.0601 9.73756C26.7695 9.03647 26.3438 8.39948 25.807 7.863V7.863Z"
            stroke="url(#paint0_linear_23_4333)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_23_4333"
              x1="28"
              y1="8.5"
              x2="4.99997"
              y2="8.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9463D9" />
              <stop offset="1" stopColor="#CB68D4" />
            </linearGradient>
          </defs>
        </svg>
      </Like>
      <Btn onClick={onClick}>구매하기</Btn>
    </Wrapper>
  );
}

export default PurchaseBtn;
