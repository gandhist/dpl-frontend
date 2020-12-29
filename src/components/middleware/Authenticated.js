import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store/Index";


const Authenticated = (props) => {
    const auth = useRecoilValue(authenticated)
    const history = useHistory();
    useEffect(() => {
        // handle jika tidak login
        if (!auth.check) {        
            history.push('/login')    
        }
    },[auth.check])

    return props.children;
}

export default Authenticated;

// ref https://www.youtube.com/watch?v=kVV17VI9qTU&list=PLRKMmwY3-5MwXT8zMPbezhDnTM3cTA5cZ&index=12