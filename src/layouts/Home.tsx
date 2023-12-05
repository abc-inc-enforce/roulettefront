import * as S from "./Home.style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [tableNum, setTableNum] = useState("");
  const handleTableNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableNum(event.target.value);
  };
  const handleOnClick = () => {
    if (tableNum === "" || isNaN(parseInt(tableNum, 10))) {
      alert("번호를 입력해주세요");
    } else {
      localStorage.setItem("tableNum", tableNum);
      navigate("/order");
    }
  };
  const handleEnterPress = (event: any) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };
  return (
    <>
      <S.body>
        <S.onwer>
          <Link to="/table">
            <S.choice>주인</S.choice>
          </Link>
        </S.onwer>

        <S.customer onClick={handleOnClick}>
          <S.customerBox>
            <S.choice>테이블</S.choice>
            <S.inputNum
              placeholder="테이블 번호를 입력"
              onClick={(e) => e.stopPropagation()}
              onChange={handleTableNumChange}
              onKeyDown={handleEnterPress}
            ></S.inputNum>
          </S.customerBox>
        </S.customer>
      </S.body>
    </>
  );
};

export default Home;
