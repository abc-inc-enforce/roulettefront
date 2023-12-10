import styled from "styled-components";

export const body = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const owner = styled.div`
  width: 40%;
  height: 90%;
  background-color: pink;
  margin-right: 5%;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
`;
export const customer = styled.div`
  width: 40%;
  height: 90%;
  background-color: #6666cc;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
`;
export const customerBox = styled.div`
  width: 100%;
  height: 10%;
`;

export const choice = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: bold;
  align-items: center;
  margin-bottom: 5%;
`;

export const inputNum = styled.input`
  width: 40%;
  height: 100%;
  padding-left: 5%;
  font-size: 1.2rem;
`;
