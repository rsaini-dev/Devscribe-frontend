import { useState, useEffect,} from "react";


const useAuth = () =>{
    const [profile, setProfile] = useState(() => {

        return localStorage.getItem('profile') || null
    })
    
    useEffect(() => {
        if (profile) {
          localStorage.setItem("profile", profile);
        } else {
          localStorage.removeItem("profile");
        }
      }, [profile]);

    const login = () => {
        setProfile('user')
    }

    const logout = () =>{
        setProfile(null)
    }

    return {profile, login, logout };

}

export default useAuth
