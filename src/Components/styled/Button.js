import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #494949;
  }
`;

export const Outlinebtn = styled(Button)`
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover {
    background-color: #eff3f6ff;
  }
`;
