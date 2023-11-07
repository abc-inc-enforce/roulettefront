import styled from "styled-components";

export const body = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export const header = styled.div`
  width: 100%;
  height: 10%;
  margin: 0;
  display: flex;
  align-items: center;
  /* background-color: grey; */
  margin-top: 1%;
`;

export const title = styled.div`
  font-size: 1.5rem;
  padding-left: 8%;
  padding-right: 74%;
`;

export const backIcon = styled.img`
  height: 50%;
  width: auto;
  padding-right: 8%;
`;

export const barlist = styled.div`
  width: 82%;
  margin: auto;
  height: 70%;
`;

export const bar = styled.div`
  width: 100%; /* 막대의 너비 */
  height: 10%; /* 막대의 높이 */
  background-color: white;
  border: 1px solid #000;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
export const bartext = styled.div`
  padding-left: 2%;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
`;
export const Btn = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "white")};
  color: ${(props) => (props.color ? "white" : "black")};
  height: 80%;
  width: 10%;
  align-items: center;
  border: 1px solid black;
  margin-right: 2%;
`;

export const inputMenu = styled.input`
  background-color: white;
  height: 70%;
  width: 20%;
  border: 1px solid black;
  text-align: center;
  margin-right: 3%;
`;

export const category = styled.select`
  background-color: white;
  height: 80%;
  width: 20%;
  border: 1px solid black;
  text-align: center;
  margin-right: 3%;
`;

export const addBtn = styled.div`
  background-color: #b83858;
  height: 50px;
  width: 200px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: auto;
  margin-top: 3%;
`;
