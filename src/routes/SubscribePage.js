import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Btn = styled.button`
  background-color: #5f0080;
  min-width: 96vw;
  height: 52px;
  position: fixed;
  bottom: 47px;
  left: 0;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  margin-left: 2vw;
  border: none;
  z-index: 300;
`;

const Header = styled.div`
  width: 100vw;
  top: 15vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 28px;
  min-width: 71px;
  color: black;
  font-size: 16px;
  font-weight: 500;
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

const PhoneNumInput = styled.input`
  width: 91.5%;
  height: 50px;
  border: solid 1px #333333;
  border-radius: 4px;
  ::placeholder {
    color: #dedede;
  }
  outline-color: #5f0080;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-top: 16px;
  padding-left: 20px;
`;

const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitBtn = styled.button`
  width: 91.5%;
  height: 50px;
  border: solid 1px #5f0080;
  border-radius: 4px;
  margin-top: 48px;
  background-color: #5f0080;
  color: white;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SubscribePage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const onChange = (event) => {
    const value = event.currentTarget.value;
    setInputText(value);
    //console.log(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    //console.log(inputText);
    const response = await fetch(
      `http://3.34.2.197:8080/send?sender=${inputText}
    `,
      {
        method: "POST",
        body: {},
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await response.json();
    //console.log(json);
    if (json == 200) {
      navigate("/thanks");
    } else {
      alert("컬리버드 화이팅!");
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div>
        <Header>
          <HeaderMain>
            <GoBackBtn onClick={goBack}>
              <FontAwesomeIcon icon={faAngleLeft} size="sm" />
            </GoBackBtn>
            <Title>가격 변동 알림 받기</Title>
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
        </Header>
        <InputForm onSubmit={onSubmit}>
          <PhoneNumInput
            id="phoneNum"
            type="number"
            placeholder="휴대폰 번호를 입력해주세요."
            onChange={onChange}
            value={inputText}
          />
          <SubmitBtn>완료</SubmitBtn>
        </InputForm>
      </div>
    </>
  );
}

export default SubscribePage;
