import React, { useState, useEffect } from "react";
import * as S from "./TableManage.style";
import Table from "../components/Table";
import Header from "../components/OwnerHeader";
import OrderPopup from "../components/OrderPopup";
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";

const TableManage = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    // WebSocket 연결 설정
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      console.log("WebSocket connected for table notifications");

      stompClient.send("/app/initTables");

      stompClient.subscribe("/topic/initialTables", (message) => {
        const receivedTables = JSON.parse(message.body);
        setTables(receivedTables);
      });

      // 클라이언트가 입장한 각 테이블에 대한 토픽을 구독
      stompClient.subscribe(`/topic/table`, (message) => {
        console.log("asdfsfs");
        const receivedTables = JSON.parse(message.body);
        console.log("d:", receivedTables);
        setTables(receivedTables);
      });
    });

    return () => {
      // 컴포넌트가 언마운트될 때 WebSocket 연결 해제
      if (stompClient.connected) {
        stompClient.disconnect();
      }
    };
  }, []);

  return (
    <S.body>
      <Header></Header>
      {showOrderPopup && (
        <OrderPopup
          showOrderPopup={showOrderPopup}
          setShowOrderPopup={setShowOrderPopup}
          totalPrice={0}
          left="50%"
        ></OrderPopup>
      )}
      <S.tablelist>
        <ul>
          {tables.map((table, index) => (
            <li key={index}>
              <Table tableNum={table[0]} setListPopup={setShowOrderPopup} />
            </li>
          ))}
        </ul>
      </S.tablelist>
      {/* <S.notice>1번 테이블에 새로운 주문이 들어왔습니다.</S.notice> */}
    </S.body>
  );
};

export default TableManage;
