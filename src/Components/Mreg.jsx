import { Stack } from "@mui/material";
import { useState } from "react";
import TStyle from "../subComponents/TStyle";
import { toast } from "react-hot-toast";
import Areg from "./Areg";
import "../Styles/reg.css";

export const Mreg = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [phoneno, setNumber] = useState("");

  const [showAreg, setShowAreg] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
    return (
      toast.success("Submitted successfully")
    );
  };

  return (
    <div>
      {showAreg ? (
        <Areg />
      ) : (
        <>
          <div className="st">
            <h1>For Hirers : </h1>
            <div className="togg">
              <h3>Are you a <span style={{ color: "antiquewhite" }}> Jobseeker ?</span></h3>
              <TStyle className="toggle" size="small" onClick={() => setShowAreg(!showAreg)} />
            </div>
          </div>
          <div className="ff">
            <form onSubmit={submitHandler}>
              <Stack spacing={5} paddingLeft={5} sx={{ alignItems: "center", justifyContent: "center" }}>
                <input className="in" placeholder="name" type="text" onChange={(e) => { setName(e.target.value); }} value={name} required />
                <input className="in" placeholder="email" type="email" onChange={(e) => { setEmail(e.target.value); }} value={email} required />
                <input className="in" placeholder="password" type="password" onChange={(e) => { setPassword(e.target.value); }} value={password} required />
                <input className="in" placeholder="Phone No." type="tel" pattern="[0-9]{10}" onChange={(e) => { setNumber(e.target.value); }} value={phoneno} required />
                <input className="in" placeholder="company Name" type="text" onChange={(e) => { setCompany(e.target.value); }} value={company} required />
                <button className="LoginB" style={{ width: "230px" }}>submit</button>
              </Stack>
            </form>
          </div>
        </>)}
    </div>
  );
};
export default Mreg;