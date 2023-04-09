import React from "react";
import {SeparatorWrapperStyled} from "./Separator.styled";

export interface SeparatorProps {
    color?: string,
    width?: string,
    height?: string
    className?: string,
    style?: object
}

const Separator: React.FC<SeparatorProps> = (props) => (
    <SeparatorWrapperStyled
        {...props}
    />
)

export default Separator;