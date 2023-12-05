import * as S from "./CreateMenu.style";
import Header from "../components/OnwerHeader";
import menu from "../data/menu";

const CreateMenu = () => {
  return (
    <S.body>
      <Header />
      <S.barlist>
        <S.bar>
          <S.bartext>
            <S.inputMenu placeholder="메뉴명"></S.inputMenu>
            <S.category>
              <option value="" selected disabled hidden>
                카테고리
              </option>
              <option>메인</option>
              <option>음료</option>
              <option>추가</option>
            </S.category>
            <S.inputMenu placeholder="가격"></S.inputMenu>
          </S.bartext>
          <S.Btn color="#b83858">등록</S.Btn>
        </S.bar>
        {menu.map(({ name }, index) => (
          <S.bar>
            <S.bartext>{name}</S.bartext>
            <S.Btn color="#b83858">수정</S.Btn>
            <S.Btn>삭제</S.Btn>
          </S.bar>
        ))}
      </S.barlist>
      <S.addBtn>추가</S.addBtn>
    </S.body>
  );
};

export default CreateMenu;
