import { Stack } from "@mui/material"
import { useState } from "react";
import TStyle from "../subComponents/TStyle"
import { toast } from "react-hot-toast";

const Mreg = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [phoneno, setNumber] = useState("");
  const [stipend, setStipend] = useState();
  const [duration, setDuration] = useState();

  const submitHandler = (e)=>{
    e.preventDefault();
    return(  
      toast.success("Submitted successfully")
    ); 
  }

  return (
    <div>
      <div className="st">
        <h1>For Hirers</h1>
        <div className="toggle-container">
            <h2>Are you a <span style={{color:"antiquewhite"}}> Jobseeker ?</span></h2>
            <TStyle className="toggle"/>
        </div>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <Stack spacing={5} paddingLeft={5} sx={{ alignItems: "center", justifyContent: "center" }}>
            <input className="in" placeholder="name" type="text" onChange={(e)=>{setName(e.target.value)}} value={name} required/>
            <input className="in" placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
            <input className="in" placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
            <input className="in" placeholder="company Name" type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company} required/>
            <input className="in" placeholder="Phone No. - would not be shared" type="tel" pattern="[0-9]{10}" onChange={(e)=>{setNumber(e.target.value)}} value={phoneno} required/>
            <input className="in" placeholder="Stipend / Year" type="number" onChange={(e)=>{setStipend(e.target.value)}} value={stipend} required/>
            <input className="in" placeholder="Duration" type="number" onChange={(e)=>{setDuration(e.target.value)}} value={duration} required/>            
            <button className="LoginB" style={{width: "230px"}}>submit</button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default Mreg