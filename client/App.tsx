import React, {useState} from 'react';
import PageWrapper from "./misc/PageWrapper"
import Components from "./Components";
import "./App.css";
import { GlobalStyle } from "../src";

const Entries = Object.entries(Components);

export default () => {
    const [selected, setSelected] = useState(Entries[0][0]);

    // @ts-ignore
    const Selected = Components[selected].component;
    // @ts-ignore
    const props = Components[selected].props || {};
    return (
        <React.Fragment>
            <GlobalStyle />
            <PageWrapper>
                <select className={"component-select"}
                        onChange={(e) => setSelected(e.target.value)
                }>
                    {Entries.map(e => {
                        return (
                            <option>{
                                // @ts-ignore
                                e[0]}</option>
                        )
                    })}
                </select>

                {
                    // @ts-ignore
                    <Selected {...props} />
                }
            </PageWrapper>
        </React.Fragment>
    )
};