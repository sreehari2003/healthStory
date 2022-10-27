import React, { useContext } from "react";
import { AuthCTX } from "../context/Auth";

export const useAuth = () => {
  const ctx = useContext(AuthCTX);
  if (ctx === null) {
    throw new Error("No AuthContext found");
  }
  return ctx;
};
