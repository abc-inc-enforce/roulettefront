import styled from "styled-components";

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
  height: 8%;
  background-color: #b83858;
  border: 0.5px solid black;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  margin-top: 1.5%;
`;
