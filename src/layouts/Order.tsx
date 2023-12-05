import * as S from "./Order.style";
import Food from "../components/Food";
import category from "../data/category";
import menu from "../data/menu";
import backIcon from "../assets/back.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type OrderItem = {
  name: string;
  count: number;
  price: number;
};

const Order = () => {
  const [categoryValue, setcategoryValue] = useState("메인");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const [menuInfo, setMenuInfo] = useState<OrderItem>({
    name: "",
    count: 0,
    price: 0,
  });
  const [orderList, setOrderList] = useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const tableNum = localStorage.getItem("tableNum");
  const handleBackClick = () => {
    navigate("/");
  };
  const addMenu = (name: any, price: any) => {
    setMenuInfo({ ...menuInfo, name, price, count: 1 });
    setShowMenuPopup(true);
  };
  const menuCount = (value: boolean) => {
    if (value) {
      setMenuInfo({ ...menuInfo, count: menuInfo.count + 1 });
    } else {
      if (menuInfo.count > 1)
        setMenuInfo({ ...menuInfo, count: menuInfo.count - 1 });
    }
  };
  const addOrder = () => {
    setShowMenuPopup(false);
    setOrderList((prevOrderList) => [...prevOrderList, menuInfo]);
    setTotalPrice(totalPrice + menuInfo.price);
    setMenuInfo({ name: "", count: 1, price: 0 });
    setShowAddPopup(true);
    setTimeout(() => {
      setShowAddPopup(false);
    }, 2000);
  };
  const showOrderList = () => {
    setShowOrderPopup(true);
    console.log(orderList ? JSON.stringify(orderList) : "dss");
    console.log(totalPrice);
  };
  const handleDelete = (indexToDelete: number) => {
    setOrderList((prevOrderList) => {
      const deletedItemPrice = prevOrderList[indexToDelete]?.price || 0;
      const updatedOrderList = prevOrderList.filter(
        (item, index) => index !== indexToDelete,
      );
      setTotalPrice(totalPrice - deletedItemPrice);

      return updatedOrderList;
    });
  };
  const InvitingUpgrade = () => {
    setShowOrderPopup(false);
    setShowInvite(true);
  };
  return (
    <S.body>
      <S.sidebar>
        <S.tableNum>{tableNum}번 테이블</S.tableNum>
        <S.categoryList>
          {category.map(({ name }, index) =>
            name === categoryValue ? (
              <S.category
                onClick={() => setcategoryValue(name)}
                key={index}
                color="white"
              >
                {name}
              </S.category>
            ) : (
              <S.category onClick={() => setcategoryValue(name)} key={index}>
                {name}
              </S.category>
            ),
          )}
        </S.categoryList>
      </S.sidebar>
      <S.display>
        <S.header>
          <ul>
            <li id="select">메뉴</li>
            <li>룰렛</li>
          </ul>
          <S.backIcon src={backIcon} onClick={handleBackClick} />
        </S.header>
        <S.menu>
          {showMenuPopup && (
            <S.addMenu>
              <S.popupHeader>
                <h3>{menuInfo.name}</h3>
                <p onClick={() => setShowMenuPopup(false)}>X</p>
              </S.popupHeader>
              <S.infoBox>
                <S.info>수량</S.info>
                <p>{menuInfo.count}</p>{" "}
                <S.count>
                  <p onClick={() => menuCount(true)}>+</p>
                  <hr />
                  <p onClick={() => menuCount(false)}>-</p>
                </S.count>
              </S.infoBox>
              <S.infoBox>
                <p>${menuInfo.price * menuInfo.count}</p>
              </S.infoBox>
              <S.button onClick={addOrder}>주문 담기</S.button>
            </S.addMenu>
          )}
          {showAddPopup && <S.addPopup>메뉴가 추가되었습니다.</S.addPopup>}
          <ul>
            {menu.map(({ img, name, category, price }, index) =>
              category === categoryValue ? (
                <li key={index} onClick={() => addMenu(name, price)}>
                  <Food
                    foodImg={img}
                    foodName={name}
                    foodPrice={price + "원"}
                  />
                </li>
              ) : null,
            )}
          </ul>
        </S.menu>
        {showInvite && (
          <>
            <S.inviteUpgrade>강화 초대권이 도착했습니다.</S.inviteUpgrade>
            <S.Accept onClick={() => navigate("/upgrade")}>수락</S.Accept>
            <S.Accept color="#6666CC">거절</S.Accept>
          </>
        )}
        {showOrderPopup && (
          <S.OrderPopup>
            <S.popupHeader>
              <h3>주문 내역</h3>
              <p id="cancle" onClick={() => setShowOrderPopup(false)}>
                X
              </p>
            </S.popupHeader>
            <S.popupContainer>
              {orderList.map(({ name, count, price }, index) => (
                <li key={index}>
                  <tr>{name}</tr>
                  <tr>{count}개</tr>
                  <tr>{price}원</tr>
                  <tr>
                    <S.cancle onClick={() => handleDelete(index)}>
                      삭제
                    </S.cancle>
                  </tr>
                </li>
              ))}
            </S.popupContainer>
            <S.totalPrice>
              <p>최종 결제 금액</p>
              <p>{totalPrice}원</p>
            </S.totalPrice>
            <S.button onClick={InvitingUpgrade}>주문</S.button>
          </S.OrderPopup>
        )}
        <S.orderBtn onClick={showOrderList}>주문 확인</S.orderBtn>
      </S.display>
    </S.body>
  );
};

export default Order;
