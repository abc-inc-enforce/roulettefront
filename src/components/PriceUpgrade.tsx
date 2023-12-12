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
  const basePrice = Number(localStorage.getItem("price"));
  const [price, setPrice] = useState(basePrice);
  const [result, setResult] = useState(false);

  const handleUpgrade = () => {
    const randomValue = Math.floor(Math.random() * 100);
    console.log("Random Value:", randomValue);

    // 처음엔 90% 성공인데 성공할때마다 성공확률 10% 감소 할인 5% 실패하면 원가의 1.5배 근데 40 -> 20 (여긴 50% 할인) 20 -> 50( 여기 무료)

    if (randomValue < percent) {
      setUpgradeSuccess(
        `강화에 성공하였습니다!\n적용할인률 : ${Math.floor(
          (1 - discount) * 100,
        )}%`,
      );
      if (percent == 40) setPercent(percent - 20);
      else if (percent == 20) setPercent(5);
      else setPercent(percent - 10);
      if (percent <= 41) {
        if (percent == 5) {
          setDiscount(0.05);
          setResult(true);
        } else setDiscount(discount - 0.2);
      } else setDiscount(discount - 0.05);
      setPrice(Math.floor(price * discount));
    } else {
      setPrice(basePrice * 1.5);
      alert("강화에 실패하였습니다....");
      setResult(true);
    }
    setUpgrade(true);
    const timerId = setTimeout(() => {
      setUpgrade(false);
    }, 1500);
  };

  const sendPrice = () => {
    console.log(localStorage.getItem("price"));
    fetch("http://localhost:8080/totalPrice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tableNum: localStorage.getItem("tableNum"),
        price: price,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // 성공적으로 처리되면 메뉴 데이터를 다시 가져와서 상태를 업데이트합니다.
          console.log("success");
        } else {
          throw new Error("메뉴 생성 실패");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleResult = () => {
    setPriceUpgrade(false);
  };

  return (
    <S.upgradeBox>
      {upgrade && invitePopup(upgradeSuccess)}
      {result && (
        <S.resultPopup>
          <h2>최종 계산서</h2>
          <S.priceBox>${price}</S.priceBox>
          <S.Btn
            onClick={() => {
              setPriceUpgrade(false);
              sendPrice();
            }}
          >
            확인했어요
          </S.Btn>
        </S.resultPopup>
      )}
      <S.noticeline>
        실패시 가격이 1.5배 비싸집니다. 한번 실패하면 더이상 도전할 수 없습니다.
      </S.noticeline>
      <S.upgradeInfo>
        <S.foodimg src={foodimg} />
        <S.upgradetextbox>
          <ul>
            <li>현재 확률 : {percent}%</li>
            <li>현재 가격 :{price}원</li>
            <li>원가 : {basePrice}</li>
          </ul>
        </S.upgradetextbox>
      </S.upgradeInfo>

      <S.button>
        <S.gobutton onClick={handleUpgrade}>강화하기</S.gobutton>
        <S.weakbutton
          onClick={() => {
            setResult(true);
          }}
        >
          그만두기..
        </S.weakbutton>
      </S.button>
    </S.upgradeBox>
  );
};

export const invitePopup = (message: string) => {
  return <S.inviteUpgrade>{message}</S.inviteUpgrade>;
};
