import {useState}  from "react";
import TStyle from "../subComponents/TStyle"
import { Stack } from "@mui/material";
import { toast } from "react-hot-toast";
import Mreg from "./Mreg";
const Areg = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uni, setUni] = useState("");
  const [phoneno, setNumber] = useState("");
  const [uniGpa, setUniGpa] = useState();
  const [uniPass, setuniPass] = useState();
  const [lin, setLin] = useState();
  const [git, setGit] = useState();
  const [resume, setResume] = useState();
  const [showMreg, setShowMreg] = useState(false);


  const submitHandler = (e)=>{
    e.preventDefault();
    return(  
      toast.success("Submitted successfully")
    ); 
  }


  return (
    <div>
      {showMreg ? (
        <Mreg />
        ) : (
        <>
      <div className="st">
        <h1>For Jobseekers : </h1>
        <div className="togg">
            <h3>Are you a <span style={{color:"antiquewhite"}}> Jobseeker ?</span></h3>
            <TStyle className="toggle" size="small" checked={!showMreg} onClick={()=>setShowMreg(!showMreg)}/>
        </div>
      </div>
      <div className="ff">
        <form onSubmit={submitHandler}>
          <Stack spacing={5} paddingLeft={5} sx={{ alignItems: "center", justifyContent: "center" }}>

            <input className="in" placeholder="name" type="text" onChange={(e)=>{setName(e.target.value)}} value={name} required/>
            <input className="in" placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
            <input className="in" placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required/>
            <input className="in" placeholder="Phone No." type="tel" pattern="[0-9]{10}" onChange={(e)=>{setNumber(e.target.value)}} value={phoneno} required/>
            <input className="in" placeholder="University Name" type="text" onChange={(e)=>{setUni(e.target.value)}} value={uni} required/>
            <input className="in" placeholder="University GPA ( /10 )" type="decimal" onChange={(e)=>{setUniGpa(e.target.value)}} value={uniGpa} required/>
            <input className="in" placeholder="Passing Year" type="number" onChange={(e)=>{setuniPass(e.target.value)}} value={uniPass} required/>            
            <input className="in" placeholder="LinkedIn URL" type="url" onChange={(e)=>{setLin(e.target.value)}} value={lin} required/>            
            <input className="in" placeholder="GitHubURL" type="url" onChange={(e)=>{setGit(e.target.value)}} value={git} required/>            
            <input className="in" placeholder="Resume Google docs link (shared mode)" type="url" onChange={(e)=>{setResume(e.target.value)}} value={resume} required/>            
            <button className="LoginB" style={{width: "230px"}}>submit</button>
          </Stack>
        </form>
      </div>
      </>)}
    </div>
  )
}

export default Areg;