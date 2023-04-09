import styled from "styled-components";

const SeparatorWrapperStyled = styled.div.attrs({
    defaultWidth: "100%",
    defaultHeight: "1px",
    defaultColor: "black"
})`
  width: ${ ({ width, defaultWidth }: any) => width || defaultWidth };
  height: ${ ({ height, defaultHeight }: any) => height || defaultHeight };
  background-color: ${ ({ color, defaultColor }: any) => color || defaultColor };
`;

export {
    SeparatorWrapperStyled
}