import React from "react";
import Sidebar from "./Sidebar";

const Index = ({ children }) =>{
    return (
        <div>
            <div className="flex flex-wrap bg-gray-100 w-full h-screen">
                <Sidebar />
                <div className="w-9/12">
                    <div className="container">
                        <div className="flex space-x-4 p-2 mb-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;