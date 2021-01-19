import React, { useState } from 'react';
import { Stage, Layer, Star, Text } from 'react-konva';
import { NavLink, Link } from 'react-router-dom';


function generateShapes() {
    return [...Array(10)].map((_, i) => ({
        id: i.toString(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        idDragging: false
    }));
}

const INITIAL_STATE = generateShapes();


const Desain = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const [stars, setStars] = useState(INITIAL_STATE);

    // handle awal drag
    const handleDragStart = (e) => {
        const id = e.target.id();
        setStars(
            stars.map((star) => {
                return {
                    ...star, isDragging: star.id === id
                }
            })
        );
    }

    // handle akhir drag
    const handleDragEnd = (e) => {
        setStars(
            stars.map((star) => {
                return {
                    ...star, isDragging: false,
                }
            })
        );
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
                                <NavLink exact to="/" className="nav-link active" aria-current="page" href="#">Beranda</NavLink>
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
                    <div className={`row justify-content-center shadow-lg text-center ${darkMode ? 'text-light' : 'text-dark'}`}>
                        <h3 className={`h3 ${darkMode ? 'text-light' : 'text-dark'}`}>Desain dan Atur Sesuai Keinginan Hati Anda</h3>
                        <Stage width={window.innerWidth - 150} height={window.innerHeight - 100}>
                            <Layer>
                                <Text text="Desain dan Susun Dekorasi sesuai keinginan" />

                                {stars.map((star) => (
                                    <Star
                                        key={star.id}
                                        id={star.id}
                                        x={star.x}
                                        y={star.y}
                                        numPoints={5}
                                        innerRadius={20}
                                        outerRadius={40}
                                        fill="#89b717"
                                        opacity={0.8}
                                        draggable
                                        rotation={star.rotation}
                                        shadowColor="black"
                                        shadowBlur={10}
                                        shadowOpacity={0.6}
                                        shadowOffsetX={star.isDragging ? 10 : 5}
                                        shadowOffsetY={star.isDragging ? 10 : 5}
                                        scaleX={star.idDragging ? 1.2 : 1}
                                        scaleY={star.idDragging ? 1.2 : 1}
                                        onDragStart={handleDragStart}
                                        onDragEnd={handleDragEnd}
                                    />
                                ))}
                            </Layer>
                        </Stage>
                    </div>
                    <div className="row ustify-content-center text-center">
                        <div className="col-md-12 col-lg-12 ">
                            <button className="btn btn-primary" >Pesan Sekarang!</button>
                            <a target="_blank" href="https://dpl.niowcode.id/" target="_blank" className="btn btn-primary ml-2" >Mau Chat Admin?</a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-4">
                            <div className={`card mb-3 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                {/* <img className="card-img-top rounded mx-auto d-block" src="https://dpl.niowcode.id/images/giphy_1.gif" alt="Card image cap" /> */}
                                <img style={{ height: '250px' }} className="card-img-top rounded mx-auto d-block" src="https://media.giphy.com/media/jQEwinjYT2Vck/giphy.gif" alt="Card image cap" />

                                <div className={`card-body`}>
                                    <h5 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Khabib Nurmagomedov</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={`card mb-3 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                <img style={{ height: '250px' }} className="card-img-top rounded mx-auto d-block" src="https://media.giphy.com/media/l2Sq2ySYEIl3mzVgk/giphy.gif" alt="Card image cap" />
                                <div className={`card-body`}>
                                    <h5 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Dark card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={`card mb-3 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                                <img style={{ height: '250px' }} className="card-img-top rounded mx-auto d-block" src="https://media.giphy.com/media/3o7ZeltXSmmz7Q5LCo/giphy.gif" alt="Card image cap" />
                                <div className={`card-body`}>
                                    <h5 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Dark card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button type="button" className="btn btn-primary">Go somewhere</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <div style={{ borderTop: '3px double #8c8b8b' }} />

            {/* footer */}
            <footer className={`footer ${darkMode ? 'bg-dark' : 'bg-light'}`}>
                <div className="container">
                    <ul className="list-inline mb-0 text-center">
                        <li className="list-inline-item">
                            <a href=""><span className="fa fa-twitter"></span></a>
                        </li>

                        <li className="list-inline-item">
                            <a href=""><span className="fa fa-google-plus"></span></a>
                        </li>

                        <li className="list-inline-item">
                            <a href=""><span className="fa fa-instagram"></span></a>
                        </li>

                        <li className="list-inline-item">
                            <a href=""><span className="fa fa-envelope-o"></span></a>
                        </li>
                    </ul>
                </div>
            </footer>
            {/* end of footer */}
        </div >
    );
}

export default Desain;