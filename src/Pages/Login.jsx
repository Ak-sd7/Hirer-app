import { Stack } from "@mui/material"
import "../Styles/login.css"
import { useState } from "react"
import TStyle from "../subComponents/TStyle"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast";
import s from "../assets/login-bg.a6f5d4be.svg"

const Login = () => {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    return(  
      toast.success("Submitted successfully")
    ); 
  }

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <div className="lmain">
        <form onSubmit={submitHandler}>
          <Stack spacing={5} paddingLeft={5} sx={{ alignItems: "center", justifyContent: "center" }}>
            <input className="in" placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
            <input className="in" placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
            <div className="toggle-container">
              <h2>Are you here to<span style={{color:"antiquewhite"}}> hire ?</span></h2>
              <TStyle className="toggle"/>
            </div>
            <button className="LoginB" style={{width: "300px"}}>submit</button>
          </Stack>
        </form> 
        <div className="belowor">
          <h4 style={{color:"#95af29"}}>OR</h4>
          <Link to={"/register"} className="ll"><h3>Register</h3></Link>
        </div>
      </div>
      <div style={{paddingTop: "10px"}}>
        <img className="lo" src={s}/>
      </div>
    </div>
  )
}

export default Login