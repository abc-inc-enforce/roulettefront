import React, { useState, useEffect } from "react";
import * as S from "./TableManage.style";
import Table from "../components/Table";
import Header from "../components/OwnerHeader";
import OrderPopup from "../components/OrderPopup";
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";
import { tableNum } from "../components/Table.style";

type OrderItem = {
  name: string;
  count: number;
  price: number;
};

const TableManage = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [tables, setTables] = useState([]);
  const [orderList, setOrderList] = useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notice, setNotice] = useState("");
  const [num, setNum] = useState(0);

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

  const order = (tableNum: number) => {
    console.log("sd");
    setNum(tableNum);
    fetch(`http://localhost:8080/orders/${tableNum}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("주문 데이터 가져오기 실패");
        }
      })
      .then((data) => setOrderList(data))
      .catch((error) => console.error("Error:", error));
    fetch(`http://localhost:8080/totalPrice/${tableNum}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("주문 데이터 가져오기 실패");
        }
      })
      .then((data) => setTotalPrice(data[0].price))
      .catch((error) => console.error("Error:", error));
  };

  const orderComplete = (tableNum: number) => {
    fetch(`http://localhost:8080/orders/${tableNum}`, {
      method: "DELETE",
    }).catch((error) => console.error("Error:", error));
    fetch(`http://localhost:8080/totalPrice/${tableNum}`, {
      method: "DELETE",
    }).catch((error) => console.error("Error:", error));
    alert(`${tableNum}번 테이블의 결제가 끝났습니다.`);
    setTotalPrice(0);
    window.location.reload();
  };

  return (
    <S.body>
      <Header></Header>
      {showOrderPopup && (
        <>
          <OrderPopup
            showOrderPopup={showOrderPopup}
            setShowOrderPopup={setShowOrderPopup}
            totalPrice={totalPrice}
            onCompleteClick={orderComplete}
            tableNum={num}
            left="50%"
          >
            {orderList.map(({ name, count, price }, index) => (
              <li key={index}>
                <tr>{name}</tr>
                <tr>{count}개</tr>
                <tr>{price * count}원</tr>
              </li>
            ))}
          </OrderPopup>
        </>
      )}

      <S.tablelist>
        <ul>
          {tables.map((table, index) => (
            <li key={index}>
              <Table
                tableNum={table[0]}
                setListPopup={setShowOrderPopup}
                onOrderListClick={order}
              />
            </li>
          ))}
        </ul>
      </S.tablelist>
      {/* <S.notice>{notice}</S.notice> */}
    </S.body>
  );
};

export default TableManage;
