import styled from "styled-components";

// .weakbutton{
// position: fixed;
// background-color: #32028c;
// height: 50px;
// width: 200px;
// color:white;
// margin-left: 630px;
// text-align: center;
// line-height: 50px;
// margin-top: -50px;
// font-size: large;
// float: right;
// }

export const body = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
`;
export const header = styled.header`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  justify-content: center;
`;
export const upgradeInfo = styled.div`
  width: 100%;
  display: flex;
  height: 60%;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
export const upgradeBox = styled.div`
  background-color: #4b2f28;
  width: 100%;
  height: 75%;
  border-radius: 30px;
  padding-top: 1%;
`;
export const noticeline = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  width: 80%;
  border-radius: 50px;
  align-items: center;
  height: 6%;
  font-weight: bold;
  color: white;
  background-color: black;
`;
export const foodimg = styled.img`
  height: 100%;
  width: auto;
`;
export const upgradetextbox = styled.div`
  color: white;
  text-align: left;
  margin-left: 15%;
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    line-height: 300%;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const button = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3%;
`;
export const gobutton = styled.button`
  background-color: #b83858;
  height: 50px;
  width: 200px;
  color: white;
  text-align: center;
  font-size: large;
  margin-right: 20%;
`;
export const weakbutton = styled.button`
  background-color: #32028c;
  height: 50px;
  width: 200px;
  color: white;
  text-align: center;
  font-size: large;
`;
