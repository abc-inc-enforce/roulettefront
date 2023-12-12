// Home.js

import React, { useState } from "react";
import * as S from "./Home.style";
import { Link, useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

const Home = () => {
  const navigate = useNavigate();
  const [tableNum, setTableNum] = useState("");

  const handleTableNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableNum(event.target.value);
  };

  const handleOnClick = () => {
    if (tableNum === "" || isNaN(parseInt(tableNum, 10))) {
      alert("번호를 입력해주세요");
    } else {
      localStorage.setItem("tableNum", tableNum);

      const socket = new SockJS("http://localhost:8080/ws");
      const stompClient = Stomp.over(socket);
      stompClient.connect({}, () => {
        console.log("WebSocket connected for table selection");
        stompClient.send("/app/table", JSON.stringify({ tableNum }), {});
        // stompClient.disconnect();
      });

      navigate("/order");
    }
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <>
      <S.body>
        <S.owner>
          <Link to="/table">
            <S.choice>주인</S.choice>
          </Link>
        </S.owner>

        <S.customer onClick={handleOnClick}>
          <S.customerBox>
            <S.choice>테이블</S.choice>
            <S.inputNum
              placeholder="테이블 번호를 입력"
              onClick={(e) => e.stopPropagation()}
              onChange={handleTableNumChange}
              onKeyDown={handleEnterPress}
            ></S.inputNum>
          </S.customerBox>
        </S.customer>
      </S.body>
    </>
  );
};

export default Home;
