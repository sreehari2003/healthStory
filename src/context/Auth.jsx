import React, { useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

export const AuthCTX = React.createContext(null);

const supabase = createClient(
  "https://cjkluqbvfedhpbreebsl.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqa2x1cWJ2ZmVkaHBicmVlYnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQyMDAsImV4cCI6MTk4MjMwMDIwMH0.GHgODt7nlJ5KNILxqJMmeQgFpyppvjUL1S3UinAGJSo"
);

const AuthContext = ({ children }) => {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  const values = {
    signInWithGoogle,
    signout,
  };

  return <AuthCTX.Provider value={values}>{children}</AuthCTX.Provider>;
};

export default AuthContext;
