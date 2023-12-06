import * as S from "./TableManage.style";
import Table from "../components/Table";
import Header from "../components/OnwerHeader";

const TableManage = () => {
  return (
    <S.body>
      <Header></Header>
      <S.tablelist>
        <ul>
          {[...Array(12)].map((_, i) => (
            <li key={i}>
              <Table tableNum={i + 1} />
            </li>
          ))}
        </ul>
      </S.tablelist>
      <S.notice>1번 테이블에 새로운 주문이 들어왔습니다.</S.notice>
    </S.body>
  );
};

export default TableManage;
