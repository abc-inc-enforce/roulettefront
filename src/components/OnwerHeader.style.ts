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
  background-color: #b83858;
  color: white;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 75%;
    list-style: none;
    display: flex;
    gap: 10%;
    /* background-color: pink; */
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding-bottom: 30%;
  }
  a:hover {
    border-bottom: 3px solid white;
  }
`;
