import * as S from "./PriceUpgrade.style";
import foodimg from "../assets/img/teko.jpg";

const PriceUpgrade = () => {
  return (
    <S.body>
      <S.header>⭐ 가격 강화 ⭐</S.header>
      <S.upgradeBox>
        <S.noticeline>
          실패시 가격이 1.5배 비싸집니다. 한번 실패하면 더이상 도전할수
          없습니다.
        </S.noticeline>
        <S.upgradeInfo>
          <S.foodimg src={foodimg} />
          <S.upgradetextbox>
            <ul>
              <li>현재 확률 : 60%</li>
              <li>현재 가격 : 8000원</li>
              <li>원가 : 10000원</li>
            </ul>
          </S.upgradetextbox>
        </S.upgradeInfo>

        <S.button>
          <S.gobutton>강화하기</S.gobutton>
          <S.weakbutton>그만두기..</S.weakbutton>
        </S.button>
      </S.upgradeBox>
    </S.body>
  );
};

export default PriceUpgrade;
