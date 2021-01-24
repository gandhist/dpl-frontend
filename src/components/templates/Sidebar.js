import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authUser } from "../store/Index";

// const User = () => {
//     const { user } = useContext(UserContext)
//     return (
//         <div>
//             {user.name}
//         </div>
//     )
// }



const Sidebar = () => {
    const userFromRecoil = useRecoilValue(authUser);
    // const access_token = JSON.parse(localStorage.getItem('access_token')).token;
    // const history = useHistory();




    return (
        <div>
            <nav id="sidebar" className="sidebar">
                <div className="sidebar-content js-simplebar">
                    <Link className="sidebar-brand" to="/">
                        <span className="align-middle">DPL-Books - {userFromRecoil.data.name}</span>
                    </Link>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>
                        <li className="sidebar-item">
                            <NavLink exact to="/dashboard" className="sidebar-link">
                                <i className="align-middle fa fa-dashboard" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink exact to="/paket" className="sidebar-link">
                                <i className="align-middle fa fa-dropbox" data-feather="credit-card" /> <span className="align-middle">Paket</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink exact to="/order" className="sidebar-link">
                                <i className="align-middle fa fa-address-book-o" data-feather="book" /> <span className="align-middle">Orders Lists</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <a href="#master" data-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle fa fa-database" data-feather="users"></i> <span className="align-middle">Data Master</span>
                            </a>
                            <ul id="master" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li className="sidebar-item"><NavLink exact to="/paket" className="sidebar-link">Paket</NavLink></li>
                                <li className="sidebar-item"><NavLink exact to="/kategori" className="sidebar-link">Kategori</NavLink></li>
                                <li className="sidebar-item"><NavLink exact to="/properti" className="sidebar-link">Properti</NavLink></li>
                                <li className="sidebar-item"><NavLink exact to="/satuan" className="sidebar-link">Properti</NavLink></li>

                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <NavLink exact to="change-password" className="sidebar-link">
                                <i className="align-middle fa fa-key" data-feather="book" /> <span className="align-middle">Change Password</span>
                            </NavLink>
                        </li>

                    </ul>
                    {/* <div className="sidebar-cta">
                        <div className="sidebar-cta-content">
                            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                            <div className="mb-3 text-sm">
                                Are you looking for more components? Check out our premium version.
                            </div>
                            <a href="https://adminkit.io/pricing" target="_blank" className="btn btn-primary btn-block">Upgrade to Pro</a>
                        </div>
                    </div> */}
                </div>
            </nav>
        </div>
    );


}

export default Sidebar;