import React, { useState,useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export const AuthCTX = React.createContext(null);

const supabase = createClient(
  "https://cjkluqbvfedhpbreebsl.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqa2x1cWJ2ZmVkaHBicmVlYnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQyMDAsImV4cCI6MTk4MjMwMDIwMH0.GHgODt7nlJ5KNILxqJMmeQgFpyppvjUL1S3UinAGJSo"
);

const AuthContext = ({ children }) => {
    const [user,setUser ] = useState([]);
   console.log(user);
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(data);
  }
  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  useEffect(()=>{
    (async()=>{
        const { data } = await supabase
        .from('users')
        .select('id, username, avatar_url, website')
        setUser(data);
        console.log(data);
    })()
 
  },[])

  const values = {
    signInWithGoogle,
    signout,
  };

  return <AuthCTX.Provider value={values}>{children}</AuthCTX.Provider>;
};

export default AuthContext;
