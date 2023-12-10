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

export const addPopup = styled.div`
  position: fixed;
  top: 55%;
  left: 60%;
  width: 40%;
  height: 40%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1001;
  h2 {
    padding-top: 5%;
    padding-bottom: 2%;
    margin: 0;
  }
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const count = styled.div`
  margin: auto;
  margin-top: 10%;
`;
export const inputCount = styled.input`
  margin-left: 5%;
`;

export const inputContainer = styled.div`
  width: 90%;
  height: 50%;
  margin: auto;
  /* background-color: grey; */
  overflow-y: scroll;
  li {
    list-style: none;
    height: 20%;
    padding-bottom: 2%;
  }
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 3%;
    flex-flow: wrap;
    justify-content: center;
  }
`;

export const inputName = styled.input`
  height: 100%;
`;

export const completeBtn = styled.div`
  width: 40%;
  height: 13%;
  margin: auto;
  margin-top: 3%;
  background-color: lightgrey;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
