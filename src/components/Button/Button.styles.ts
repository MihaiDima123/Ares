import styled from "styled-components";

const StyledPrimaryButton = styled.button`
  font-family: "Myriad Pro Regular", sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  color: #fff;
  background-color: #000;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  transition: linear .1s;
  
  &:hover {
    background-color: #222;
  }
`;

export {
    StyledPrimaryButton
};