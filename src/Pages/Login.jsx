import { Stack } from "@mui/material"
import "../Styles/login.css"
import { useState } from "react"

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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "100px", alignContent:"center"}}>
        <form onSubmit={submitHandler}>
          <Stack spacing={5} paddingLeft={5} sx={{ alignItems: "center", justifyContent: "center" }}>
            <input placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
            <input placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
            <div className="toggle-container" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
              <h2>Are you here to hire ?</h2>
              <input type="checkbox" id="rememberMe" />
            </div>
            <button className="LoginB" style={{width: "300px"}}>submit</button>
          </Stack>
        </form>
      </div>
  )
}

export default Login