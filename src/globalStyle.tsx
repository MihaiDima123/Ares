import { createGlobalStyle } from "styled-components";
// @ts-ignore
import font from "../fonts/MYRIADPRO-REGULAR.woff";

export default createGlobalStyle`
  @font-face {
    font-family: 'Myriad Pro Regular';
    src: local('Myriad Pro Regular'), url(${font}) format('woff');
  }
`;