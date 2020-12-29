import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
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
              email : email,
              password : password
          };
        await fetch('http://127.0.0.1:8000/api/login', {
            method: "POST",
            headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(ulogin)
          }).then(
            (res) => {
                console.log(res)
                // if username and password wrong 
                if(res.status === 500){
                    alert('invalid username and password')
                }
                else {
                    res.json().then((res) => {
                        console.warn("result", res)
                        localStorage.setItem('access_token', JSON.stringify({login: true, token: res.data.access_token}))
                        history.push('/dashboard')
                      })
                }
            }
          );
      } catch  {
          alert('something went wrong while login')
      } finally{
          setLoading(false)
      }
  }


    return (
      <div className="App">
          <div className="h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                  <div className="leading-loose">
                    <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                        <p className="text-white font-medium text-center text-lg font-bold">LOGIN Decor Party Lahat</p>
                          <div className="mt-2">
                            <label className="block text-sm text-white" htmlFor="email">E-mail</label>
                            <input
                            value={email}
                            onChange=
                            {
                             e => setEmail(e.target.value)
                            }
                             className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email"  placeholder="Email" aria-label="email" required />
                          </div>
                          <div className="mt-2">
                            <label className="block  text-sm text-white">Password</label>
                            <input 
                            value={password}
                            onChange={
                              e => setPassword(e.target.value)
                            }
                            className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                              type="password" id="password" placeholder="Password" arial-label="password" required />
                          </div>
  
                          <div className="mt-4 items-center flex justify-between">
                            <button 
                            onClick={
                                handleLogin
                            }
                            disabled={loading}
                            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                              type="button">{loading ? "Loading..." : "Login"}</button>
                              {/* <Link to="/dashboard" className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
                                  Login
                              </Link> */}
                              <Link 
                                className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                to="/register" > 
                                Belum Punya Akun?</Link>
                          </div>
                          <div className="text-center">
                            {/* <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                                Criar uma conta
                            </a> */}
                          </div>
  
                    </form>
  
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
}

export default Login;
