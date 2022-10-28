import React, { useState, useEffect } from "react";
import { GoogleAuthProvider ,getAuth,signInWithPopup} from "firebase/auth";
import axios from "axios";
import {app } from "./Firebase";
import { useNavigate} from "react-router-dom"

export const AuthCTX = React.createContext(null);

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [isAUthActive,setAUth] = useState(false);
  const signAsDoc =async () => {
    const auth  = getAuth(app);
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const data = {
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
        uid:user.uid,
      }
      axios.post("http://localhost:3000/doctor",data).then(el=>{
        setAUth(true);
        if(!el.data.passyear){
          navigate("/wizard");
        }else{
          navigate("/dashboard")
        }
      });

      localStorage.setItem("data","doc");
      localStorage.setItem("uid",user.uid);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
 
  };
      

  const pat = ()=> {
    const auth  = getAuth(app);
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const data = {
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
        uid:user.uid,
      }
      localStorage.setItem("data","doc");
      localStorage.setItem("uid",user.uid);
      axios.post("http://localhost:3000/user",data).then(el=>{
        setAUth(true);

        navigate("/dashboard");
      });
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const signOut = ()=>{
    setAUth(false);
    localStorage.removeItem("data");
    localStorage.removeItem("uid");
    const auth  = getAuth(app);
    signOut(auth).then(() => {
       navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const values = {
    signAsDoc,
    signOut,
    pat,
    isAUthActive
  };

  return <AuthCTX.Provider value={values}>{children}</AuthCTX.Provider>;
};

export default AuthContext;
