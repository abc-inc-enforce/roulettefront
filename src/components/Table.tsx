import React, { useState } from "react";
import * as S from "./Table.style";

interface TableProps {
  tableNum: number;
  setListPopup: React.Dispatch<React.SetStateAction<boolean>>; // setListPopup 함수의 타입을 명시
}

const Table: React.FC<TableProps> = ({ tableNum, setListPopup }) => {
  const table = (
    <S.table>
      <S.tableNum>{tableNum}번 테이블</S.tableNum>
      <S.tableBtn onClick={() => setListPopup(true)}>주문목록</S.tableBtn>
      <S.tableBtn color="#b83858">결제확인</S.tableBtn>
    </S.table>
  );

  return table;
};

export default Table;
