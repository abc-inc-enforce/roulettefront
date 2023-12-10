import styled from "styled-components";

export const body = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
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
  display: block;
`;
