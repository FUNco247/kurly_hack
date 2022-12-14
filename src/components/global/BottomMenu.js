import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MenuBox = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  min-height: 45px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  border-top: solid 0.5px #999999;
  background-color: white;
  div {
    &:first-child {
      color: #5f0080;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
`;

function BottomMenu() {
  return (
    <MenuBox>
      <Menu>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} size="lg" />
        </Link>
      </Menu>
      <Menu>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </Menu>
      <Menu>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </Menu>
      <Menu>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </Menu>
    </MenuBox>
  );
}

export default BottomMenu;
