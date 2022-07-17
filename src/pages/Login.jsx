import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Login = () => {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const {handleLogin, token} = useContext(AuthContext);

  return (
  <div>
      <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" variant="outlined" />
      <br /><br />
      <TextField value={pass} onChange={(e)=>setPass(e.target.value)} type="password" label="Password" variant="outlined" />
      <br /><br />
      <Button onClick={()=>handleLogin({email, password:pass})} variant="contained">Login</Button>
  </div>
  );
};
