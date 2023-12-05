import styled from "styled-components";

export const backIcon = styled.img`
  height: 50%;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;
export const header = styled.div`
  width: 100%;
  height: 11%;
  margin: 0;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  justify-content: center;
  border-bottom: 2px solid grey;
  ul {
    width: 75%;
    list-style: none;
    display: flex;
    gap: 10%;
    /* background-color: pink; */
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;
