import React from "react";
import * as S from "./OrderBar.style"; // your import statement for styled-components
import { Link, useNavigate } from "react-router-dom";
import backIcon from "../assets/back.svg";

interface SideBarComponentsProps {
  children: React.ReactNode;
}

export const SideBarComponents: React.FC<SideBarComponentsProps> = ({
  children,
}) => {
  const tableNum = Number(localStorage.getItem("tableNum")) || 0;
  return (
    <S.sidebar>
      <S.tableNum>{tableNum}번 테이블</S.tableNum>
      <S.categoryList>{children}</S.categoryList>
    </S.sidebar>
  );
};

interface OrderHeaderComponetsProps {
  select: string;
}

export const OrderHeaderComponets: React.FC<OrderHeaderComponetsProps> = ({
  select,
}) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <S.header>
      <ul>
        <li>
          <Link to="/order" id={select === "menu" ? "select" : ""}>
            메뉴
          </Link>
        </li>
        <li>
          <Link to="/roulette" id={select === "game" ? "select" : ""}>
            미니 게임
          </Link>
        </li>
      </ul>
      <S.backIcon src={backIcon} onClick={handleBackClick} />
    </S.header>
  );
};
