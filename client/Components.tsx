import {
    Button
} from "@mihaidima/ares";
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