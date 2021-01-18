import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Index = ({ children }) => {
    return (
        <div>
            <div className="wrapper">
                <Sidebar />
                <Main children={children} />
            </div>
        </div>
    );
}

export default Index;