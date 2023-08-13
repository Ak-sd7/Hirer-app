import { Stack } from "@mui/material"
import "../Styles/login.css"
import { useState } from "react"
import TStyle from "../subComponents/TStyle"

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    return(  
      console.log("submitted")
    ); 
  }

  return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "100px", alignContent:"center", flexDirection:"column", maxHeight:"100vh"}}>
        <form onSubmit={submitHandler}>
          <Stack spacing={5} paddingLeft={5} sx={{ alignItems: "center", justifyContent: "center" }}>
            <input className="in" placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
            <input className="in" placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
            <div className="toggle-container">
              <h2>Are you here to hire ?</h2>
              <TStyle className="toggle" color="warning"/>
            </div>
            <button className="LoginB" style={{width: "300px"}}>submit</button>
          </Stack>
        </form>
        <div className="belowor">
          <h4 style={{paddingRight:"26px", color:"#95af29"}}>OR</h4>
          <h3 style={{paddingTop: "10px"}}>Register</h3>
        </div>
      </div>
  )
}

export default Login