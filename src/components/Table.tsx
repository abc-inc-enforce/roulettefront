import React, { useState } from "react";
import * as S from "./Table.style";

interface TableProps {
  tableNum: number;
  setListPopup: React.Dispatch<React.SetStateAction<boolean>>; // setListPopup 함수의 타입을 명시
  onOrderListClick: (tableNum: number) => void;
  onCompleteClick: (tableNum: number) => void;
}

const Table: React.FC<TableProps> = ({
  tableNum,
  setListPopup,
  onOrderListClick,
  onCompleteClick,
}) => {
  const handleClick = () => {
    // 주문목록 버튼 클릭 시 실행될 로직 추가
    onOrderListClick(tableNum);
  };

  return (
    <S.table>
      <S.tableNum>{tableNum}번 테이블</S.tableNum>
      <S.tableBtn
        onClick={() => {
          setListPopup(true);
          handleClick();
        }}
      >
        주문목록
      </S.tableBtn>
      <S.tableBtn color="#b83858" onClick={() => onCompleteClick(tableNum)}>
        결제확인
      </S.tableBtn>
    </S.table>
  );
};

export default Table;
