import React from "react";
import './PageWrapper.css'

interface PageWrapperProps {
    children: any
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <div className={"page-wrapper"}>
            { children }
        </div>
    )
}

export default PageWrapper;