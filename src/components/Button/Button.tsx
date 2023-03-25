import React, { MouseEventHandler } from "react";
import {
    StyledPrimaryButton
} from "./Button.styles";

export interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <StyledPrimaryButton
                onClick={props.onClick}
        >
            {props.label}
        </StyledPrimaryButton>
    );
};

export default Button;