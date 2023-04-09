import React from "react";
import {SeparatorWrapperStyled} from "./Separator.styled";

export interface SeparatorProps {
    color?: string,
    width?: string,
    height?: string
    className?: string,
    style?: object
}

const Separator: React.FC<SeparatorProps> = ({
    color,
    width,
    height,
    className,
    style
}) => (
    <SeparatorWrapperStyled
        color={color}
        width={width}
        height={height}
        className={className}
        style={style}
    />
)

export default Separator;