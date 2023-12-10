import styled from "styled-components";

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
  a {
    text-decoration: none;
    color: black;
  }
`;
export const backIcon = styled.img`
  width: 3%;
  margin-right: 5%;
  &:hover {
    cursor: pointer;
  }
`;
