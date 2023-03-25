import {
    Button
} from "../src";
import React from "react";

export default {
    button: {
        component: Button,
        props: {
            label: "Button",
            onClick: () => console.log("clicked")
        }
    }
}