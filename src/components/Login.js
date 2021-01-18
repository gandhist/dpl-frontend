import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../App.css';

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // method login
  const handleLogin = async () => {
    setLoading(true)
    try {
      let ulogin = {
        email: email,
        password: password
      };
      await fetch('http://127.0.0.1:8000/api/login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ulogin)
      }).then(
        (res) => {
          console.log(res)
          // if username and password wrong 
          if (res.status === 500) {
            alert('invalid username and password')
          }
          else if (res.status === 422) {
            res.json().then((res) => {
              alert(res.message)
            })
          }
          else {
            res.json().then((res) => {
              localStorage.setItem('access_token', JSON.stringify({ login: true, token: res.data.access_token, data: res.data }))
              history.push('/dashboard')
            })
          }
        }
      );
    } catch {
      alert('something went wrong while login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <main className="d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <h1 className="h2">Welcome Back!</h1>
                  <p className="lead">
                    Sign in to your account to continue
            </p>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      {/* <div className="text-center">
                        <img src="img/avatars/avatar.jpg" alt="Charles Hall" className="img-fluid rounded-circle" width={132} height={132} />
                      </div> */}
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"
                            value={email}
                            onChange=
                            {
                              e => setEmail(e.target.value)
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password"
                            value={password}
                            onChange={
                              e => setPassword(e.target.value)
                            }
                          />
                          <small>
                            <a href="pages-reset-password.html">Forgot password?</a>
                          </small>
                          <br />
                          <small>
                            <Link to="/register" > Belum Punya Akun?</Link>
                          </small>
                        </div>
                        <div>
                          <label className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="remember-me" name="remember-me" defaultChecked />
                            <span className="form-check-label">
                              Remember me next time
                      </span>
                          </label>
                        </div>
                        <div className="text-center mt-3">
                          <button type="submit" className="btn btn-lg btn-primary"
                            onClick={
                              handleLogin
                            }
                            disabled={loading}
                          > {loading ? "Loading..." : "Sign In"}</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );

  // return (
  //   <div>
  //     <div className="container-lg" >
  //       <div className="row justify-content-md-center">
  //         <div className="col-lg-auto">
  //           <div className="mb-3">
  //             <label className="form-label">Email</label>
  //             <input className="form-control" type="email" id="email" placeholder="Email" aria-label="email" required
  //               value={email}
  //               onChange=
  //               {
  //                 e => setEmail(e.target.value)
  //               }
  //             />
  //           </div>
  //           <div className="mb-3">
  //             <label className="form-label">Password</label>
  //             <input className="form-control" type="password" id="password" placeholder="Password" arial-label="password" required
  //               value={password}
  //               onChange={
  //                 e => setPassword(e.target.value)
  //               }
  //             />
  //           </div>
  //           <div className="mb-3">
  //             <button className="btn btn-info" type="button"
  //               onClick={
  //                 handleLogin
  //               }
  //               disabled={loading}
  //             > {loading ? "Loading..." : "Login"}</button>
  //             <Link

  //               to="/register" >
  //               Belum Punya Akun?</Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Login;
