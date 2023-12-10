import * as S from "./Order.style";
import Food from "../components/Food";
// import category from "../data/category";
import backIcon from "../assets/back.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OrderPopup from "../components/OrderPopup";
import { PriceUpgrade, invitePopup } from "../components/PriceUpgrade";
import MenuData from "../data/menuData";
import {
  SideBarComponents,
  OrderHeaderComponets,
} from "../components/OrderBar";

type OrderItem = {
  name: string;
  count: number;
  price: number;
};

const Order = () => {
  const [categoryValue, setcategoryValue] = useState("메인");
  const menu = MenuData();
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
  const [priceUpgrade, setPriceUpgrade] = useState(false);
  const addMenu = (name: any, price: any) => {
    setMenuInfo({ ...menuInfo, name, price, count: 1 });
    setShowMenuPopup(true);
  };
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    updateCategories();
  }, [menu]);
  const updateCategories = () => {
    // menuData에서 중복을 제거하여 카테고리 업데이트
    const uniqueCategories = Array.from(
      new Set(menu.map((item) => item.category)),
    );
    setCategories(uniqueCategories);
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
    setTotalPrice(totalPrice + menuInfo.price * menuInfo.count);
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
      <SideBarComponents>
        {categories.map((name, index) =>
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
      </SideBarComponents>
      <S.display>
        <OrderHeaderComponets select={"menu"} />
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
          {priceUpgrade && <PriceUpgrade setPriceUpgrade={setPriceUpgrade} />}
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
            {invitePopup("강화 초대권이 도착했습니다.")}
            <S.Accept
              onClick={() => {
                setPriceUpgrade(true);
                setShowInvite(false);
              }}
            >
              수락
            </S.Accept>
            <S.Accept color="#6666CC" onClick={() => setShowInvite(false)}>
              거절
            </S.Accept>
          </>
        )}
        {showOrderPopup && (
          <OrderPopup
            showOrderPopup={showOrderPopup}
            setShowOrderPopup={setShowOrderPopup}
            orderList={orderList}
            handleDelete={handleDelete}
            totalPrice={totalPrice}
            InvitingUpgrade={InvitingUpgrade}
          >
            {orderList.map(({ name, count, price }, index) => (
              <li key={index}>
                <tr>{name}</tr>
                <tr>{count}개</tr>
                <tr>{price * count}원</tr>
                <tr>
                  <S.cancle onClick={() => handleDelete(index)}>삭제</S.cancle>
                </tr>
              </li>
            ))}
          </OrderPopup>
        )}
        <S.orderBtn onClick={showOrderList}>주문 확인</S.orderBtn>
      </S.display>
    </S.body>
  );
};

export default Order;
