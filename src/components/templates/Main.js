import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { authUser, authenticated } from "../store/Index";


const Main = ({ children }) => {

    const user = useRecoilValue(authUser);
    const userAuth = useRecoilValue(authenticated);
    const history = useHistory();

    const Logout = async () => {
        // revoking token to api
        // get the response if true clear token @ local storage 
        await fetch("http://127.0.0.1:8000/api/logout", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userAuth.token}`
            }
        }).then(
            (res) => {
                if (res.status === 500) {
                    alert('something went wrong while logout')
                }
                else {
                    res.json().then((res) => {
                        // console.warn("result", res)
                        localStorage.removeItem('access_token')
                        history.push('/login')
                    })
                }
            }
        )
    }

    return (
        <div className="main">
            <nav className="navbar navbar-expand navbar-light navbar-bg">
                <a className="sidebar-toggle d-flex" href="/">
                    <i className="hamburger align-self-center" />
                </a>
                <form className="d-none d-sm-inline-block">
                    <div className="input-group input-group-navbar">
                        <input type="text" className="form-control" placeholder="Search…" aria-label="Search" />
                        <button className="btn" type="button">
                            <i className="align-middle" data-feather="search" />
                        </button>
                    </div>
                </form>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav navbar-align">
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle" href="/" id="alertsDropdown" data-toggle="dropdown">
                                <div className="position-relative">
                                    <i className="align-middle fa fa-bell-o" data-feather="bell" />
                                    <span className="indicator">1</span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="alertsDropdown">
                                <div className="dropdown-menu-header">
                                    1 New Notifications
                                </div>
                                <div className="list-group">
                                    <Link to="/profile" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-danger" data-feather="alert-circle" />
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Update completed</div>
                                                <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                <div className="text-muted small mt-1">30m ago</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <Link to="/profile" className="text-muted">Show all notifications</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle" href="/" id="messagesDropdown" data-toggle="dropdown">
                                <div className="position-relative">
                                    <i className="align-middle fa fa-paper-plane-o" data-feather="message-square" />
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="messagesDropdown">
                                <div className="dropdown-menu-header">
                                    <div className="position-relative">
                                        1 New Messages
                                        </div>
                                </div>
                                <div className="list-group">
                                    <Link to="/profile" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={user.data.profile_photo_url} className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                                            </div>
                                            <div className="col-10 pl-2">
                                                <div className="text-dark">{user.data.name}</div>
                                                <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                                <div className="text-muted small mt-1">15m ago</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <Link to="/profile" className="text-muted">Show all messages</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="/" data-toggle="dropdown">
                                <i className="align-middle" data-feather="settings" />
                            </a>
                            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="/" data-toggle="dropdown">
                                <img src={user.data.profile_photo_url} className="avatar img-fluid rounded mr-1" alt="Charles Hall" /> <span className="text-dark">{user.data.name}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="/profile"><i className="align-middle mr-1" data-feather="user" /> Profile</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="/profile"><i className="align-middle mr-1" data-feather="user" /> Settings</Link>
                                <div className="dropdown-divider" />
                                <button type="button" className="dropdown-item" onClick={Logout}>Log out</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="content">
                {children}
            </main>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row text-muted">
                        <div className="col-6 text-left">
                            <p className="mb-0">
                                <a href="https://niowcode.id/portfolio" className="text-muted"><strong>Gandhist</strong></a> ©
                                </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Main;