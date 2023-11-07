import * as S from "./Order.style";
import Food from "../components/Food";
import category from "../data/category";
import menu from "../data/menu";
import sample from "../assets/sample.png";

const Order = () => {
  return (
    <S.body>
      <S.sidebar>
        <S.tableNum>1번 테이블</S.tableNum>
        <S.categoryList>
          {category.map(({ name }, index) =>
            name === "메인" ? (
              <S.category color="white">{name}</S.category>
            ) : (
              <S.category>{name}</S.category>
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
        </S.header>
        <S.menu>
          <ul>
            {menu.map(({ img, name, price }, index) => (
              <li>
                <Food foodImg={img} foodName={name} foodPrice={price + "원"} />
              </li>
            ))}
            {/* <Food foodImg={sample} foodName="치킨" foodPrice="2000원" /> */}
          </ul>
        </S.menu>
        <S.orderBtn>주문</S.orderBtn>
      </S.display>
    </S.body>
  );
};

export default Order;
