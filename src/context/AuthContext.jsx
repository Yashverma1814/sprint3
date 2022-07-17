import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // code here
  const [token,setToken] = useState("");

  const handleLogin = (body) =>{
    axios({
      method:"post",
      url: "https://reqres.in/api/login",
      data: body
    }).then(res => {
      setToken(res.data)
      console.log(res)
    })
  }

  const value = {
    handleLogin,
    token
  }
  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};
