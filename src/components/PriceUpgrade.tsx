import * as S from "./PriceUpgrade.style";
import foodimg from "../assets/img/teko.jpg";
import { useState } from "react";

interface PriceUpgradeProps {
  setPriceUpgrade: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PriceUpgrade: React.FC<PriceUpgradeProps> = ({
  setPriceUpgrade,
}) => {
  const [percent, setPercent] = useState(90);
  const [discount, setDiscount] = useState(0.95);
  const [upgrade, setUpgrade] = useState(false);
  const [upgradeSuccess, setUpgradeSuccess] = useState("");
  const [price, setPrice] = useState(80000);

  const handleUpgrade = () => {
    const randomValue = Math.floor(Math.random() * 100);
    console.log("Random Value:", randomValue);

    if (randomValue < percent) {
      setUpgradeSuccess(
        `강화에 성공하였습니다!\n적용할인률 : ${Math.floor(
          (1 - discount) * 100,
        )}%`,
      );
      setPercent(percent - 10);
      setDiscount(discount - 0.03);
      setPrice(Math.floor(price * discount));
    } else {
      setUpgradeSuccess("강화에 실패하였습니다....");
    }
    setUpgrade(true);
    const timerId = setTimeout(() => {
      setUpgrade(false);
    }, 1500);
  };

  return (
    <S.upgradeBox>
      {upgrade && invitePopup(upgradeSuccess)}
      <S.noticeline>
        실패시 가격이 1.5배 비싸집니다. 한번 실패하면 더이상 도전할 수 없습니다.
      </S.noticeline>
      <S.upgradeInfo>
        <S.foodimg src={foodimg} />
        <S.upgradetextbox>
          <ul>
            <li>현재 확률 : {percent}%</li>
            <li>현재 가격 :{price}원</li>
            <li>원가 : 10000원</li>
          </ul>
        </S.upgradetextbox>
      </S.upgradeInfo>

      <S.button>
        <S.gobutton onClick={handleUpgrade}>강화하기</S.gobutton>
        <S.weakbutton onClick={() => setPriceUpgrade(false)}>
          그만두기..
        </S.weakbutton>
      </S.button>
    </S.upgradeBox>
  );
};

export const invitePopup = (message: string) => {
  return <S.inviteUpgrade>{message}</S.inviteUpgrade>;
};
