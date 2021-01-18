import React from "react";

const Content = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Dashboard</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">To do list</h5>
                            </div>
                            <div className="card-body">
                                <ol>
                                    <li>handle onclick button warning</li>
                                    <li>landing page</li>
                                    <li>order page</li>
                                    <li>catatan keuangan</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;