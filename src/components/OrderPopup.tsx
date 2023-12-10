// OrderPopup.tsx
import React from "react";
import * as OrderPopupStyles from "./OrderPopup.style";

interface OrderPopupProps {
  showOrderPopup: boolean;
  setShowOrderPopup: React.Dispatch<React.SetStateAction<boolean>>;
  orderList?: any[];
  handleDelete?: (indexToDelete: number) => void;
  totalPrice: number;
  InvitingUpgrade?: () => void;
  children?: React.ReactNode; // <-- 동적으로 받아올 내용
}

const OrderPopup: React.FC<OrderPopupProps> = ({
  showOrderPopup,
  setShowOrderPopup,
  totalPrice,
  InvitingUpgrade,
  children,
}) => {
  return (
    <>
      {showOrderPopup && (
        <OrderPopupStyles.OrderPopupContainer>
          <OrderPopupStyles.PopupHeader>
            <h3>주문 내역</h3>
            <p id="cancle" onClick={() => setShowOrderPopup(false)}>
              X
            </p>
          </OrderPopupStyles.PopupHeader>
          <OrderPopupStyles.PopupContainer>
            {children}
          </OrderPopupStyles.PopupContainer>
          <OrderPopupStyles.TotalPrice>
            <p>최종 결제 금액</p>
            <p>{totalPrice}원</p>
          </OrderPopupStyles.TotalPrice>
          <OrderPopupStyles.Button onClick={InvitingUpgrade}>
            주문
          </OrderPopupStyles.Button>
        </OrderPopupStyles.OrderPopupContainer>
      )}
    </>
  );
};

export default OrderPopup;
