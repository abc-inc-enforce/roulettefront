import * as S from "./TableManage.style";
import Table from "../components/Table";
import Header from "../components/OnwerHeader";

const TableManage = () => {
  return (
    <S.body>
      <Header></Header>
      <S.tablelist>
        <ul>
          <li>
            <Table tableNum={1} />
          </li>
          <li>
            <Table tableNum={2} />
          </li>
          <li>
            <Table tableNum={3} />
          </li>
          <li>
            <Table tableNum={4} />
          </li>
          <li>
            <Table tableNum={5} />
          </li>
          <li>
            <Table tableNum={6} />
          </li>
          <li>
            <Table tableNum={7} />
          </li>
          <li>
            <Table tableNum={7} />
          </li>
          <li>
            <Table tableNum={7} />
          </li>
          <li>
            <Table tableNum={7} />
          </li>
        </ul>
      </S.tablelist>
      <S.notice>1번 테이블에 새로운 주문이 들어왔습니다.</S.notice>
    </S.body>
  );
};

export default TableManage;
