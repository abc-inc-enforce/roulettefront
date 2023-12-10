import styled, { css, keyframes } from "styled-components";

interface WheelSliceProps {
  angle: number;
}

export const RouletteContainer = styled.div`
  text-align: center;
  position: absolute;
  display: block;
  width: 100%;
  margin-top: 3%;
  height: 100%;
`;

export const RouletteResult = styled.h2`
  margin-bottom: 20px;
`;

export const Arrow = styled.div`
  margin: auto;
  transform: rotate(90deg);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 20px 0 20px 40px;
  border-color: transparent transparent transparent #f00; /* 화살표 색상은 빨강으로 설정하였습니다. */
  z-index: 1001;
  transition: transform 3s ease-in-out; /* 회전 애니메이션을 적용합니다. */
`;

export const RouletteWheel = styled.div<{ spinning: boolean }>`
  position: relative;
  margin: auto;
  width: 80%;
  padding-bottom: 41%; /* 화면 너비의 80%에 대한 80%의 패딩으로 높이 설정 */
  max-width: 40%; /* 최대 너비 설정, 필요에 따라 조절 */
  max-height: 500px; /* 최대 높이 설정, 필요에 따라 조절 */
  border-radius: 50%;
  border: 5px solid #333;
  overflow: hidden;
  animation: ${(props) =>
    props.spinning &&
    css`
      ${rotateAnimation} 3s cubic-bezier(0.25, 0.1, 0.25, 1) infinite
    `};
`;

export const WheelSlice = styled.div<WheelSliceProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(${(props) => props.angle}deg);
  background-color: ${(props) => getRandomColor()};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  p {
    color: black;
    background-color: white;
    margin: auto;
    transform: translate(-140%, -400%);
  }
  /* clip-path: polygon(50% 50%, 110% 0%, 0% 0%); */
  clip-path: polygon(50% 50%, 53% 0%, 0% 0%);
`;

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const resultPopup = styled.div`
  position: fixed;
  top: 55%;
  left: 60%;
  width: 40%;
  height: 40%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1001;
  h2 {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
export const btn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
`;
export const add = styled.div`
  display: flex;
  height: 20%;
  width: 35%;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  font-size: large;
  margin-right: 20%;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  background: linear-gradient(-45deg, #ffd700, #b83858);
  background-size: 300% 100%;
  animation: gradientMove 2s linear infinite;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.5) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.5) 75%,
      transparent 75%,
      transparent
    );
    opacity: 0;
    pointer-events: none;
  }
  transition: all 0.3s ease; // 호버 효과를 부드럽게 만들기 위한 트랜지션 추가

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const giveup = styled.div`
  display: flex;
  height: 20%;
  width: 35%;
  background-color: lightgrey;
  color: grey;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
