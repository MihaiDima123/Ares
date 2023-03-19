import React from 'react';
import PageWrapper from "./misc/PageWrapper"
import * as components from './components';
import "./App.css";

export default () => {
    const getComp = (Component: React.FC) => {
        return (
            <PageWrapper>
                {<Component />}
            </PageWrapper>
        )
    }

    return (
        <React.Fragment>
            {getComp(components.Button)}
        </React.Fragment>
    )
};