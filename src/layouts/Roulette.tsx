import {
  SideBarComponents,
  OrderHeaderComponets,
} from "../components/OrderBar";
import * as S from "./Roulette.style";
import { useState } from "react";
import RouletteComponents from "../components/Roulette";
import menu from "../data/menu";

const Roulette = () => {
  const [categoryValue, setcategoryValue] = useState("메뉴 룰렛");
  const [options, setOptions] = useState<string[]>([]);
  console.log(options);
  return (
    <S.body>
      <SideBarComponents>
        <S.category
          onClick={() => {
            setcategoryValue("메뉴 룰렛");
            setOptions(menu.map((item) => item.name));
          }}
          color={categoryValue === "메뉴 룰렛" ? "white" : ""}
        >
          메뉴 룰렛
        </S.category>
        <S.category
          onClick={() => setcategoryValue("결제자 룰렛")}
          color={categoryValue === "결제자 룰렛" ? "white" : ""}
        >
          결제자 룰렛
        </S.category>
        <S.category
          onClick={() => setcategoryValue("메뉴 보내기")}
          color={categoryValue === "메뉴 보내기" ? "white" : ""}
        >
          메뉴 보내기
        </S.category>
      </SideBarComponents>
      <S.display>
        <OrderHeaderComponets select={"game"} />
        <RouletteComponents options={options} />
      </S.display>
    </S.body>
  );
};

export default Roulette;
