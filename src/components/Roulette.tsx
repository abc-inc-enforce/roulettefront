// Roulette.tsx
import React, { useState, useEffect } from "react";
import * as S from "./Roulette.style";

interface RouletteProps {
  options: string[];
}

const Roulette: React.FC<RouletteProps> = ({ options }) => {
  const [result, setResult] = useState<string | null>();
  const [spinning, setSpinning] = useState(false);

  const spinRoulette = () => {
    if (!spinning) {
      const randomIndex = Math.floor(Math.random() * options.length);
      setSpinning(true);

      setTimeout(() => {
        setResult(options[randomIndex]);
        setSpinning(false);
      }, 3000); // 3초 동안 회전하는 것을 모방
    }
  };

  useEffect(() => {
    setResult(null); // 옵션이 변경되면 결과를 재설정
  }, [options]);

  return (
    <S.RouletteContainer>
      {result && (
        <S.resultPopup>
          <h2>{result}가 당첨되었습니다!</h2>
          <S.btn>
            <S.add>장바구니 담기</S.add>
            <S.giveup onClick={() => setResult(null)}>포기하기..</S.giveup>
          </S.btn>
        </S.resultPopup>
      )}
      <S.Arrow />
      Click Roulette~!
      <S.RouletteWheel spinning={spinning} onClick={spinRoulette}>
        {Array.from({ length: 8 }).map((_, index) => (
          <>
            <S.WheelSlice key={index} angle={index * (360 / 8)}></S.WheelSlice>
          </>
        ))}
      </S.RouletteWheel>
    </S.RouletteContainer>
  );
};

export default Roulette;
