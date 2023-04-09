import {
    Button, Separator
} from "../src";
import React from "react";

export default {
    button: {
        component: Button,
        props: {
            label: "Button",
            onClick: () => console.log("clicked")
        }
    },
    separator: {
        component: Separator,
        props: {
        }
    }
}