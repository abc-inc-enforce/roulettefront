// OrderPopup.style.tsx
import styled from "styled-components";

export const OrderPopupContainer = styled.div`
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1001;
  width: 30%;
  height: 57%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const PopupHeader = styled.div`
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

export const PopupContainer = styled.div`
  overflow-y: scroll;
  width: 85%;
  margin: auto;
  height: 50%;
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

export const Cancle = styled.div`
  padding: 4% 0;
  background-color: black;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  width: 85%;
  border: 1px solid black;
  border-radius: 20px;
  margin: auto;
  margin-top: 3%;
  p {
    width: 50%;
    margin: 0;
    padding: 3% 0;
  }
`;

export const Button = styled.div`
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
