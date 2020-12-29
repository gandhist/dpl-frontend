import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) =>{
    const [user, setUser] = useState([])
    const access_token = JSON.parse(localStorage.getItem('access_token')).token;


    const getUser = async () => {
        try {
            await fetch("http://127.0.0.1:8000/api/user", {
                method : "GET",
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${access_token}` 
                }
            }).then(
                (res) => {
                    if(res.status === 500){
                        alert('error fetching data')
                    }
                    else {
                        res.json().then(
                            (res) =>{
                                setUser(res.data);
                            }
                        )
                    }
                } 
            )
        } catch {
            console.warn("warn", "failed to get user data")
        }
    }

    useEffect(()=>{
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{ user }} >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};