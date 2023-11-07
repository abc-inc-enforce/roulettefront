import React from "react";
import * as S from "./Food.style";

interface FoodProps {
  foodImg: string;
  foodName: string;
  foodPrice: string;
}

const Food: React.FC<FoodProps> = ({ foodImg, foodName, foodPrice }) => {
  return (
    <S.food>
      <S.foodImg src={foodImg} />
      {foodName}
      <br />
      {foodPrice}
    </S.food>
  );
};
export default Food;
