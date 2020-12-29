import React, { Component } from 'react';
import {Link} from "react-router-dom";

import '../App.css';

class Register extends Component{
    render(){
        return (
            <div className="App">
          <div className="h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                  <div className="leading-loose">
                    <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                        <p className="text-white font-medium text-center text-lg font-bold">Join and be a valuable member
                        </p>
                          <div className="mt-2">
                            <label className="block text-sm text-white" htmlFor="email">E-mail</label>
                            <input
                            onChange=
                            {
                              (e)=> {
                              this.setState({
                                  email:e.target.value
                                })
                              }
                            }
                             className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email"  placeholder="Email" aria-label="email" required />
                          </div>
                          <div className="mt-2">
                            <label className="block  text-sm text-white">Password</label>
                            <input 
                            onChange={
                              (e) =>{
                                this.setState({
                                  password : e.target.value
                                })
                              }
                            }
                            className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                              type="password" id="password" placeholder="Password" arial-label="password" required />
                          </div>
  
                          <div className="mt-4 items-center flex justify-between">
                            <button 
                            onClick={
                              (e) => {
                                e.preventDefault();
                                this.login()
                              }
                            }
                            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                              type="button">Join!</button>
                              <Link 
                                className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                to="/" > 
                                Sudah Punya Akun?</Link>
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
}

export default Register;