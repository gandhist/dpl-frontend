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
                        <span className="align-middle">DPL-Books</span>
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
                            <NavLink exact to="/profile" className="sidebar-link">
                                <i className="align-middle" data-feather="user" /> <span className="align-middle">Profile</span>
                            </NavLink>
                        </li>
                        <NavLink exact to="/profile" className="sidebar-link">
                            <li className="sidebar-item" >
                                <i className="align-middle" data-feather="settings" /> <span className="align-middle">Settings</span>
                            </li>
                        </NavLink>
                        <li className="sidebar-item">
                            <NavLink exact to="/profile" className="sidebar-link">
                                <i className="align-middle" data-feather="credit-card" /> <span className="align-middle">Invoice</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink exact to="/order" className="sidebar-link">
                                <i className="align-middle" data-feather="book" /> <span className="align-middle">Orders Lists</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <a href="#auth" data-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="users"></i> <span className="align-middle">Auth</span>
                            </a>
                            <ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li className="sidebar-item"><NavLink className="sidebar-link" to="change-password">Sign In</NavLink></li>
                                <li className="sidebar-item"><NavLink className="sidebar-link" to="change-password">Sign Up</NavLink></li>
                                <li className="sidebar-item"><NavLink exact to="change-password" className="sidebar-link">Change Password</NavLink></li>

                            </ul>
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