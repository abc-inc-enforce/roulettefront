import styled from "styled-components";

export const table = styled.div`
  border: 1.3px solid black;
  width: 200px;
  height: 100%;
  border-radius: 20px;

  margin-top: 3%;
`;

export const tableNum = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const tableBtn = styled.div`
  background-color: ${(props) => (props.color ? props.color : "white")};
  color: ${(props) => (props.color ? "white" : "black")};
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 3%;
`;
