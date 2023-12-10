import {
  SideBarComponents,
  OrderHeaderComponets,
} from "../components/OrderBar";
import * as S from "./Roulette.style";
import { useEffect, useState } from "react";
import RouletteComponents from "../components/Roulette";
import MenuData from "../data/menuData";

const Roulette = () => {
  const [categoryValue, setcategoryValue] = useState("메뉴 룰렛");
  const [options, setOptions] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [nameList, setNameList] = useState<string[]>([]);
  const menu = MenuData();
  useEffect(() => {
    if (categoryValue === "메뉴 룰렛") {
      setOptions(menu.map((item) => item.name));
    }
  }, [categoryValue, menu]);
  useEffect(() => {
    setCount(0);
  }, []);
  const handleEnterPress = (event: any) => {
    if (event.key === "Enter") {
      const enteredValue = parseInt(event.target.value);

      if (isNaN(enteredValue) || enteredValue < 0) {
        alert("제대로된 숫자를 입력해주세요");
        return;
      }

      const initialNameList = Array.from({ length: enteredValue }, () => "");
      setNameList(initialNameList);

      setCount(enteredValue);
    }
  };
  const nameSubmit = () => {
    const updatedNameList = Array.from({ length: count }, (_, index) => {
      const inputElement = document.getElementById(
        `inputName-${index}`,
      ) as HTMLInputElement;
      return inputElement.value.trim();
    });

    setNameList(updatedNameList);

    if (updatedNameList.some((name) => !name)) {
      alert("모두 입력해주세요");
      return;
    }
    setOptions(updatedNameList);
    setCount(-1);
  };

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
        {categoryValue === "결제자 룰렛" && count > -1 && (
          <>
            <S.addPopup>
              <h2>값을 입력해주세요</h2>
              {count === 0 && (
                <S.count>
                  인원을 입력해주세요
                  <S.inputCount onKeyDown={handleEnterPress} />
                </S.count>
              )}
              {count !== 0 && (
                <>
                  <S.inputContainer>
                    <ul>
                      {Array.from({ length: count }).map((_, index) => (
                        <li>
                          <S.inputName
                            id={`inputName-${index}`}
                            // onChange={(event) => {
                            //   const updatedNameList = [...nameList];
                            //   updatedNameList[index] = event.target.value;
                            //   setNameList(updatedNameList);
                            // }}
                          />
                        </li>
                      ))}
                    </ul>
                  </S.inputContainer>
                  <S.completeBtn onClick={() => nameSubmit()}>
                    제출
                  </S.completeBtn>
                </>
              )}
            </S.addPopup>
          </>
        )}
        <OrderHeaderComponets select={"game"} />
        <RouletteComponents options={options} category={categoryValue} />
      </S.display>
    </S.body>
  );
};

export default Roulette;
