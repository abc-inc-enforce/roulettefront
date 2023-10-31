import React from "react";
import * as S from "./Table.style";

interface TableProps {
  tableNum: number; // tableNum의 타입을 명시적으로 지정
}

const Table: React.FC<TableProps> = ({ tableNum }) => {
  // tableNum을 props로 받아옵니다.
  const table = (
    <S.table>
      <S.tableNum>{tableNum}번 테이블</S.tableNum>{" "}
      {/* props로 받아온 tableNum을 사용 */}
      <S.tableBtn>주문목록</S.tableBtn>
      <S.tableBtn color="#d9064d">결제확인</S.tableBtn>
    </S.table>
  );

  return table;
};

export default Table;
