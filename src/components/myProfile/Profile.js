import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authUser } from "../store/Index";

const Profile = () => {

    const authUserx = useRecoilValue(authUser);
    const [user, setUser] = useState([]);
    const access_token = JSON.parse(localStorage.getItem('access_token')).token;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

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
                            getUser();
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
                                <img src={authUserx.data.profile_photo_url} alt={authUserx.data.name} className="img-fluid rounded-circle mb-2" width={128} height={128} />
                                <h5 className="card-title mb-0">{authUserx.data.name}</h5>
                                <div className="text-muted mb-2">Lead Developer</div>
                                <div>
                                    <a className="btn btn-primary btn-sm" href="#" rel="noreferrer">Follow</a>
                                    <a className="btn btn-primary btn-sm" href="#" rel="noreferrer"><span data-feather="message-square" /> Message</a>
                                </div>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">Skills</h5>
                                <a href="#" className="badge bg-primary mr-1 my-1">HTML</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">JavaScript</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">Sass</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">Angular</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">Vue</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">React</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">Redux</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">UI</a>
                                <a href="#" className="badge bg-primary mr-1 my-1">UX</a>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">About</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1"><span data-feather="home" className="feather-sm mr-1" /> Lives in <a href="#">San Francisco, SA</a></li>
                                    <li className="mb-1"><span data-feather="briefcase" className="feather-sm mr-1" /> Works at <a href="#">GitHub</a></li>
                                    <li className="mb-1"><span data-feather="map-pin" className="feather-sm mr-1" /> From <a href="#">Boston</a></li>
                                </ul>
                            </div>
                            <hr className="my-0" />
                            <div className="card-body">
                                <h5 className="h6 card-title">Elsewhere</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1"><span className="fas fa-globe fa-fw mr-1" /> <a href="#">staciehall.co</a></li>
                                    <li className="mb-1"><span className="fab fa-twitter fa-fw mr-1" /> <a href="#">Twitter</a></li>
                                    <li className="mb-1"><span className="fab fa-facebook fa-fw mr-1" /> <a href="#">Facebook</a></li>
                                    <li className="mb-1"><span className="fab fa-instagram fa-fw mr-1" /> <a href="#">Instagram</a></li>
                                    <li className="mb-1"><span className="fab fa-linkedin fa-fw mr-1" /> <a href="#">LinkedIn</a></li>
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
                                        <div className="mb-3 col-md-4">
                                            <label className="form-label" htmlFor="inputState">State</label>
                                            <select defaultValue='' id="inputState" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
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