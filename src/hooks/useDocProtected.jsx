import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate} from "react-router-dom"

const useDocProtected = () => {
    const [doc,setDoc] = useState(false);
    const navigate = useNavigate();
     useEffect(()=>{
      const data = localStorage.getItem("data");
      if(!data){
        navigate("/");
      }

      if(data === "doc"){
         setDoc(true);
      }else{
        setDoc(false);
      }
     },[])

     return doc;
}

export default useDocProtected