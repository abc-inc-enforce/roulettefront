import styled from "styled-components";

export const body = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export const tablelist = styled.div`
  width: 82%;
  margin: auto;
  height: 65%;
  display: flex;
  overflow-y: scroll;
  li {
    list-style: none;
    width: fit-content;
    height: 180px;
    margin-bottom: 20px;
  }
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 5%;
    flex-flow: wrap;
  }
`;

export const notice = styled.div`
  margin: auto;
  width: 75%;
  height: 5%;
  border: 1px solid #32028c;
  background-color: #32028c;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 2%;
  margin-top: 3%;
`;
