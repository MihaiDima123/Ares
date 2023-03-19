import React from "react";
import {Button} from "@mihaidima/ares";

const ButtonShowcase: React.FC = () => (
    <Button
        label={"Button"}
        onClick={() => console.log("clicked")}
    />
)

export default ButtonShowcase;