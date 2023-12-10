import styled from "styled-components";

export const upgradeInfo = styled.div`
  width: 100%;
  display: flex;
  height: 73%;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
export const upgradeBox = styled.div`
  position: fixed;
  top: 53%;
  left: 53%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  /* background-color: #4b2f28; */
  /* border: 1px solid grey; */
  background-color: white;
  width: 60%;
  height: 60%;
  border-radius: 30px;
  padding-top: 2%;
  padding-bottom: 1%;
  /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.4); */
  box-shadow: 0 0 30px rgba(255, 255, 102, 0.8);
  &:hover {
    box-shadow: 0 0 50px rgba(255, 255, 102, 2);
  }
  animation: fadeIn 0.8s ease-in;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0.4;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const noticeline = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  text-align: center;
  width: 80%;
  border-radius: 50px;
  align-items: center;
  height: 6%;
  font-weight: bold;
  color: white;
  background-color: black;
`;
export const foodimg = styled.img`
  position: relative;
  height: 80%;
  width: 40%;
  margin-left: 5%;
  object-fit: cover;
`;
export const upgradetextbox = styled.div`
  color: black;
  text-align: left;
  margin-left: 5%;
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    font-size: 1.2rem;
    line-height: 300%;
    font-weight: bold;
  }
`;

export const button = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const gobutton = styled.button`
  height: 50px;
  width: 200px;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
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

export const weakbutton = styled.button`
  background-color: lightgrey;
  height: 50px;
  width: 200px;
  color: grey;
  text-align: center;
  font-size: large;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
  }
`;
export const inviteUpgrade = styled.div`
  position: fixed;
  top: 50%;
  left: 53%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 3%;
  z-index: 1001;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.4);
  display: block;
  animation: fadeIn 0.8s ease-in;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
