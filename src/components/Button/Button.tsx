import React, { MouseEventHandler } from "react";
import "./Button.css";

export interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={"ares-button"}
                onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;