import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useDarkMode from "../store/UseDarkMode";

const Index = () => {

    const [theme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(theme === "light" ? false : true);

    const handleDarkMode = () => {
        setTheme(darkMode ? "dark" : "light");
        setDarkMode(!darkMode);
    }
    return (
        <div >
            <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} `}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">RA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link" aria-current="page" href="#">Beranda</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/paket" className="nav-link" href="#">Paket</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/desain" className="nav-link" href="#">Desain</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Dekorasi Kekinian" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Cari</button>
                        </form>
                        <div className="form-check form-switch ml-2 ">
                            <input className="form-check-input" type="checkbox" checked={darkMode} onChange={handleDarkMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i className="fa fa-moon-o bg-light"></i></label>
                        </div>
                    </div>
                </div>
            </nav>
            <section id="sec-about" className={`pt-5 pb-5 ${darkMode ? 'bg-secondary' : 'bg-light'}`} >
                <div className={`container `}>
                    <div className={`row justify-content-center text-center ${darkMode ? 'text-light' : 'text-dark'}`}>
                        <div className="col-md-10 col-lg-10">
                            <h1 className={`h1 ${darkMode ? 'text-light' : 'text-dark'}`}>Design Dekorasi By Rosmalia Anggraini</h1>
                            <p className="mt-4 mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="row ustify-content-center text-center">
                        <div className="col-md-12 col-lg-12 ">
                            <button className="btn btn-primary" >Pesan Sekarang!</button>
                            <a target="_blank" href="https://dpl.niowcode.id/" rel="noreferrer" className="btn btn-primary ml-2" >Mau Chat Admin?</a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-4">
                            <div className={`card mb-3 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                {/* <img className="card-img-top rounded mx-auto d-block" src="https://dpl.niowcode.id/images/giphy_1.gif" alt="Card image cap" /> */}
                                <img style={{ height: '250px' }} className="card-img-top rounded mx-auto d-block" src="https://media.giphy.com/media/3oEduFQcgwz3JbBfHO/giphy.gif" alt="Card cap" />

                                <div className={`card-body`}>
                                    <h5 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Khabib Nurmagomedov</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={`card mb-3 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                <img style={{ height: '250px' }} className="card-img-top rounded mx-auto d-block" src="https://media.giphy.com/media/l2Sq2ySYEIl3mzVgk/giphy.gif" alt="Card cap" />
                                <div className={`card-body`}>
                                    <h5 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Dark card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={`card mb-3 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                <img style={{ height: '250px' }} className="card-img-top rounded mx-auto d-block" src="https://media.giphy.com/media/3o7ZeltXSmmz7Q5LCo/giphy.gif" alt="Card cap" />
                                <div className={`card-body`}>
                                    <h5 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Dark card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" className="btn btn-primary">Go somewhere</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ borderTop: '3px double #8c8b8b' }} />

            {/* footer */}
            <footer className={`footer ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                <div className="container">
                    <ul className="list-inline mb-0 text-center">
                        <li className="list-inline-item">
                            <span className="fa fa-twitter"></span>
                        </li>

                        <li className="list-inline-item">
                            <span className="fa fa-google-plus"></span>
                        </li>

                        <li className="list-inline-item">
                            <span className="fa fa-instagram"></span>
                        </li>

                        <li className="list-inline-item">
                            <span className="fa fa-envelope-o"></span>
                        </li>
                    </ul>
                </div>
            </footer>
            {/* end of footer */}
        </div>
    );
}


export default Index;