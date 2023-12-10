import styled from "styled-components";

export const table = styled.div`
  border: 1.3px solid lightgrey;
  width: 200px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  margin-top: 3%;
  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  }
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
  border: ${(props) => (props.color ? "none" : "1.3px solid lightgrey")};
  border-radius: 15px;
  margin: auto;
  margin-bottom: 3%;
  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
