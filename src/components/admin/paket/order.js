import React from "react";

const Order = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Input setiap pengeluaran disini</h5>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '37%' }}>Name</th>
                                <th style={{ width: '25%' }}>Phone Number</th>
                                <th className="d-none d-md-table-cell" style={{ width: '25%' }}>Date of Birth</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vanessa Tucker</td>
                                <td>864-348-0485</td>
                                <td className="d-none d-md-table-cell">June 21, 1961</td>
                                <td >
                                    <button className="btn btn-xs btn-outline-info"><i className="fa fa-pencil"></i></button>
                                    <button className="btn btn-xs btn-outline-danger"><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default Order;