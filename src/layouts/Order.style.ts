import styled, { css } from "styled-components";

export const body = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export const sidebar = styled.div`
  background-color: #b83858;
  height: 100%;
  width: 16%;
  margin: 0;
  position: fixed;
`;

export const tableNum = styled.div`
  height: 8%;
  width: 80%;
  background-color: white;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 10%;
  font-size: 1.2rem;
`;

export const categoryList = styled.div`
  width: 90%;
  margin-left: 10%;
  height: 100%;
  padding-top: 15%;
`;

export const category = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8%;
  background-color: ${(props) => (props.color ? props.color : null)};
  color: ${(props) => (props.color ? "#b83858" : "white")};
  border-radius: 10px;
  /* margin-top: 10%; */
  padding-left: 10%;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
  }
`;
export const display = styled.div`
  right: 0;
  position: fixed;
  width: 80%;
  height: 100%;
  background-color: white;
  padding-left: 2%;
  padding-right: 2%;
`;

export const header = styled.div`
  padding-top: 1%;
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
  }
  li {
    width: 15%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #select {
    border-bottom: 2.5px solid #b83858;
  }
`;

export const menu = styled.div`
  width: 100%;
  height: 72%;
  margin-top: 2%;
  display: flex;
  overflow-y: scroll;
  li {
    list-style: none;
    width: 22%;
    height: 55%;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
  }
  ul {
    padding: 0;
    display: flex;
    width: 100%;
    height: 100%;
    gap: 3%;
    flex-flow: wrap;
  }
`;
export const orderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 18%;
  height: 9%;
  background-color: #b83858;
  border: 0.5px solid black;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  margin-top: 1.5%;
  &:hover {
    cursor: pointer;
  }
`;

export const backIcon = styled.img`
  width: 3%;
  margin-right: 5%;
  &:hover {
    cursor: pointer;
  }
`;
export const addPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 57%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1001;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: block;
  animation: fadeInOut 2s ease-in-out; /* 추가된 부분: 2초 동안 나타났다가 사라지는 효과 */

  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

export const addMenu = styled.div`
  position: fixed;
  top: 50%;
  left: 57%;
  width: 30%;
  height: 40%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1001;
  p {
    color: black;
    text-align: center;
  }
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const infoBox = styled.div`
  width: 80%;
  height: 16%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: auto;
  border: 1px solid grey;
  margin-bottom: 5%;
  p {
    padding-left: 5%;
  }
`;

export const info = styled.div`
  width: 20%;
  height: 100%;
  background-color: #b83858;
  border-radius: 20px 0 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: white;
  font-weight: bold;
`;
export const count = styled.div`
  width: 20%;
  height: 100%;
  border-left: 1px solid black;
  z-index: 1000;
  margin-left: 60%;
  hr {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.1rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const popupHeader = styled.div`
  display: flex;
  h3 {
    margin: auto;
    padding: 5% 0;
    padding-left: 6%;
  }
  p {
    &:hover {
      cursor: pointer;
    }
    width: 5%;
    margin: 0;
    height: fit-content;
    background-color: red;
    color: white;
    font-weight: bold;
  }
`;

export const OrderPopup = styled.div`
  position: fixed;
  top: 53%;
  left: 57%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1001;
  width: 30%;
  height: 57%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
export const popupContainer = styled.div`
  overflow-y: scroll;
  width: 85%;
  margin: auto;
  height: 50%;
  /* background-color: grey; */
  li {
    list-style: none;
    display: flex;
    padding: 4% 0;
    margin-bottom: 3%;
    border-bottom: 1px solid grey;
  }
  tr {
    width: 25%;
  }
`;
export const cancle = styled.div`
  padding: 4% 0;
  background-color: black;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const totalPrice = styled.div`
  display: flex;
  width: 85%;
  border: 1px solid black;
  margin: auto;
  margin-top: 3%;
  p {
    width: 50%;
    margin: 0;
    padding: 3% 0;
  }
`;

export const button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 85%;
  height: 12%;
  background-color: #b83858;
  border: 0.5px solid black;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 3%;
  &:hover {
    cursor: pointer;
  }
`;
export const inviteUpgrade = styled.div`
  position: fixed;
  top: 50%;
  left: 57%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 3%;
  z-index: 1001;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
export const Accept = styled.div`
  /* width: 50%; */
  top: 60%;
  left: ${(props) => (props.color ? "58%" : "50%")};
  position: fixed;
  transform: matrix() (-50%, -50%);
  background-color: ${(props) => (props.color ? props.color : "pink")};
  color: ${(props) => (props.color ? "white" : "black")};
  z-index: 1001;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: black;
  padding: 0.5% 2%;
  animation: fadeIn 2s ease-in;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
