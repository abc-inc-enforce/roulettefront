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
  color: ${(props) => (props.color ? "#b83858" : "black")};
  border-radius: 10px;
  /* margin-top: 10%; */
  padding-left: 10%;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const barlist = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 2%;
  margin-left: 20%;
  height: 69%;
  overflow-y: scroll;
  /* border: 2px solid lightgrey; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const bar = styled.div`
  width: 90%; /* 막대의 너비 */
  height: 10%; /* 막대의 높이 */
  background-color: white;
  border: 1px solid lightgrey;
  margin: auto;
  margin-top: 3%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #f9f0f2;
  }
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
  background-color: white;
  color: black;
  height: 70%;
  border: 1.5px solid lightgrey;
  width: 10%;
  align-items: center;
  border-radius: 10px;
  margin-right: 2%;
  &:hover {
    cursor: pointer;
  }
`;
export const addBtn = styled.div`
  background-color: #b83858;
  height: 50px;
  width: 200px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 2%;
  margin-left: ${(props) => (props.color ? "50%" : "")};
  border-radius: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
    background-color: #85263e;
  }
`;
export const sidebar = styled.div`
  background-color: #f6e5ea;
  height: 100%;
  width: 16%;
  margin: 0;
  position: fixed;
`;
export const categoryList = styled.div`
  width: 90%;
  margin-left: 10%;
  height: 100%;
  padding-top: 15%;
`;

export const createMenu = styled.div`
  position: fixed;
  top: 20%;
  left: 36%;
  background-color: white;
  z-index: 1001;
  width: 40%;
  height: 60%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
export const popupheader = styled.div`
  display: flex;
  width: 100%;
  h3 {
    padding: 4% 0;
    margin: auto;
  }
  p {
    width: 5%;
    height: 5%;
    margin: 0;
    right: 0;
    background-color: red;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const menuContainer = styled.div`
  width: 90%;
  /* background-color: black; */
  height: 80%;
  margin: auto;
  display: flex;
`;

export const FileUpload = styled.input.attrs({
  type: "file",
})`
  opacity: 0;
  position: absolute;
  height: 90%;
  width: 45%;
  cursor: pointer;
`;

export const menuImg = styled.div`
  display: flex;
  text-align: center;
  border-radius: 10px;
  width: 47.5%;
  height: 90%;
  border: none;
  font-size: 1rem;
  background-color: #eeeeee;
  color: grey;
  justify-content: center;
  text-align: left;
  align-items: center;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
`;
export const img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const menuInfo = styled.div`
  margin-left: 5%;
  width: 47.5%;
  height: 90%;
  padding-top: 3%;
`;

export const inputInfo = styled.input`
  width: 95%;
  height: 17%;
  border-radius: 20px;
  border: 1px solid grey;
  padding-left: 5%;
  margin-bottom: 5%;
`;
