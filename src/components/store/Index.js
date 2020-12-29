import { selector, atom } from "recoil";

// const theme = atom({
//     key: 'switch-theme',
//     default: 'dark'
// })


const isLogin = JSON.parse(localStorage.getItem('access_token')) ? JSON.parse(localStorage.getItem('access_token')).login : false;


const authUser = selector({
    key: 'authUser',
    get: async () => {
        const access_token = JSON.parse(localStorage.getItem('access_token')).token;
        var user = null;
        try {
                user = await fetch("http://127.0.0.1:8000/api/user", {
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
                            return res.json(); 
                            // res.json().then(
                            //     (res) =>{
                            //         return res.data
                            //     }
                            // )
                        }
                    } 
                )
        } catch {
            console.warn("warn", "failed to get user data")
        }
        let data = {
            isLogin : isLogin,
            data : user.data,
        }
        return data;
    }
})

const authenticated = atom({
    key: 'authenticated',
    default : {
        check : isLogin
    }
});


export { authUser, authenticated }