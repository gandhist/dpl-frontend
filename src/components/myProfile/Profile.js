import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { authUser } from "../store/Index";

const Profile = () => {

    // const authUserx = useRecoilValue(authUser);
    const [user, setUser] = useState([]);
    const access_token = JSON.parse(localStorage.getItem('access_token')).token;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);




    // handle update data
    const updateUser = async () => {
        try {
            setLoading(true)
            let dataUpdate = {
                name: name,
                phone: phone,
                password: password
            }
            await fetch('http://127.0.0.1:8000/api/user', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                },
                body: JSON.stringify(dataUpdate)
            }).then(
                (res) => {
                    if (res.status === 500) {
                        alert('something went wrong')
                    }
                    else if (res.status === 422) {
                        alert(res.message)
                    }
                    else {
                        res.json().then((res) => {
                            console.warn('update', res)
                            // getUser();
                            alert(res.meta.message)
                        })
                    }
                }
            );
        } catch (e) {
            setLoading(false)
            console.log(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // get user detals
        const getUser = async () => {
            try {
                await fetch('http://127.0.0.1:8000/api/user', {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                }).then(
                    (res) => {
                        if (res.status === 500) {
                            alert('error fetching data')
                        }
                        else {
                            res.json().then((res) => {
                                // console.log("result", res)
                                setUser(res.data);
                                setEmail(res.data.email);
                                setPhone(res.data.phone ? res.data.phone : '');
                                setName(res.data.name);
                            })
                        }
                    }
                )

            } catch {
                alert("something went wrong")
            }
        }
        getUser()
    }, [access_token])
    return (
        <div>
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3" >Profile</h1>
                <div className="row">
                    <div className="col-md-4 col-xl-3">
                        <div className="card mb-3">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Profile Details</h5>
                            </div>
                            <div className="card-body text-center">
                                <img src={user.profile_photo_url} alt={user.name} className="img-fluid rounded-circle mb-2" width={128} height={128} />
                                <h5 className="card-title mb-0">{user.name}</h5>
                                <div className="text-muted mb-2">Lead Developer</div>
                                <div>
                                    <Link to="/" className="btn btn-primary btn-sm" rel="noreferrer">Follow</Link>
                                    <Link to="/" className="btn btn-primary btn-sm" rel="noreferrer"><span data-feather="message-square" /> Message</Link>
                                </div>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">Skills</h5>
                                <Link to="/" className="badge bg-primary mr-1 my-1">HTML</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">JavaScript</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">Sass</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">Angular</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">Vue</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">React</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">Redux</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">UI</Link>
                                <Link to="/" className="badge bg-primary mr-1 my-1">UX</Link>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">About</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1"><span data-feather="home" className="feather-sm mr-1" /> Lives in <Link to="/">San Francisco, SA</Link></li>
                                    <li className="mb-1"><span data-feather="briefcase" className="feather-sm mr-1" /> Works at <Link to="/">GitHub</Link></li>
                                    <li className="mb-1"><span data-feather="map-pin" className="feather-sm mr-1" /> From <Link to="/">Boston</Link></li>
                                </ul>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">Elsewhere</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1"><span className="fas fa-globe fa-fw mr-1" /> <Link to="/">staciehall.co</Link></li>
                                    <li className="mb-1"><span className="fab fa-twitter fa-fw mr-1" /> <Link to="/">Twitter</Link></li>
                                    <li className="mb-1"><span className="fab fa-facebook fa-fw mr-1" /> <Link to="/">Facebook</Link></li>
                                    <li className="mb-1"><span className="fab fa-instagram fa-fw mr-1" /> <Link to="/">Instagram</Link></li>
                                    <li className="mb-1"><span className="fab fa-linkedin fa-fw mr-1" /> <Link to="/">LinkedIn</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 col-xl-9" >
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Update Profile</h5>
                                <h6 className="card-subtitle text-muted">Update your data.</h6>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" htmlFor="inputEmail4">Email</label>
                                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" htmlFor="inputEmail4">Name</label>
                                            <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" name="name" placeholder="Email" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" htmlFor="inputPassword4">Password</label>
                                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" name="password" placeholder="Password" />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" htmlFor="inputPassword4">Phone</label>
                                            <input value={phone} onChange={e => setPassword(e.target.value)} type="text" className="form-control" id="phone" name="phone" placeholder="08xxxxxx" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" htmlFor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" />
                                        </div>

                                        <div className="mb-3 col-md-2">
                                            <label className="form-label" htmlFor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" />
                                        </div>
                                    </div>
                                    {/* <div className="mb-3">
                                        <label className="form-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <span className="form-check-label">Check me out</span>
                                        </label>
                                    </div> */}
                                    <button onClick={updateUser} type="button" className="btn btn-primary">{
                                        loading ? 'Loading...' : 'Update'
                                    }</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );


}

export default Profile;