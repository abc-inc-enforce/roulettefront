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
  left: string;
  onCompleteClick?: (tableNum: number) => void;
  tableNum?: number;
  children?: React.ReactNode; // <-- 동적으로 받아올 내용
}

const OrderPopup: React.FC<OrderPopupProps> = ({
  showOrderPopup,
  setShowOrderPopup,
  totalPrice,
  InvitingUpgrade,
  children,
  left,
  onCompleteClick,
  tableNum,
}) => {
  return (
    <>
      {showOrderPopup && (
        <OrderPopupStyles.OrderPopupContainer color={left}>
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
          {onCompleteClick ? (
            <OrderPopupStyles.Button
              onClick={() =>
                onCompleteClick &&
                tableNum !== undefined &&
                onCompleteClick(tableNum)
              }
            >
              결제완료
            </OrderPopupStyles.Button>
          ) : (
            <OrderPopupStyles.Button onClick={InvitingUpgrade}>
              주문
            </OrderPopupStyles.Button>
          )}
        </OrderPopupStyles.OrderPopupContainer>
      )}
    </>
  );
};

export default OrderPopup;
