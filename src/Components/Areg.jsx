import { useState } from "react";
import TStyle from "../subComponents/TStyle";
import { Stack } from "@mui/material";
import { toast } from "react-hot-toast";
import Mreg from "./Mreg";
import { useContextProvider } from "../providers";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Areg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uniName, setUniName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [uniGpa, setUniGpa] = useState();
  const [uniPass, setuniPass] = useState();
  const [linkedInUrl, setlinkedInUrl] = useState();
  const [resume, setResume] = useState();
  const [showMreg, setShowMreg] = useState(false);

  const {
    isAuthenticated,
    setIsAuthenticated,
    loading,
    setLoading,
    setServer,
  } = useContextProvider();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const server = "http://localhost:3000/api/v1/ausers";
      setServer(server);
      const { data } = await axios.post(
        `${server}/new`,
        {
          name,
          email,
          password,
          uniName,
          phoneNo,
          uniGpa,
          uniPass,
          linkedInUrl,
          resume,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/getHired"} />;
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
              <h3>
                Are you a{" "}
                <span style={{ color: "antiquewhite" }}> Jobseeker ?</span>
              </h3>
              <TStyle
                className="toggle"
                size="small"
                checked={!showMreg}
                onClick={() => setShowMreg(!showMreg)}
              />
            </div>
          </div>
          <div className="ff">
            <form onSubmit={submitHandler}>
              <Stack
                spacing={5}
                paddingLeft={5}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <input
                  className="in"
                  placeholder="name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  required
                />
                <input
                  className="in"
                  placeholder="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required
                />
                <input
                  className="in"
                  placeholder="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                />
                <input
                  className="in"
                  placeholder="Phone No."
                  type="tel"
                  pattern="[0-9]{10}"
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                  value={phoneNo}
                  required
                />
                <input
                  className="in"
                  placeholder="University Name"
                  type="text"
                  onChange={(e) => {
                    setUniName(e.target.value);
                  }}
                  value={uniName}
                  required
                />
                <input
                  className="in"
                  placeholder="University GPA ( /10 )"
                  type="decimal"
                  onChange={(e) => {
                    setUniGpa(e.target.value);
                  }}
                  value={uniGpa}
                  required
                />
                <input
                  className="in"
                  placeholder="Passing Year"
                  type="number"
                  onChange={(e) => {
                    setuniPass(e.target.value);
                  }}
                  value={uniPass}
                  required
                />
                <input
                  className="in"
                  placeholder="LinkedIn URL"
                  type="url"
                  onChange={(e) => {
                    setlinkedInUrl(e.target.value);
                  }}
                  value={linkedInUrl}
                  required
                />
                <input
                  className="in"
                  placeholder="Resume Google docs link (shared mode)"
                  type="url"
                  onChange={(e) => {
                    setResume(e.target.value);
                  }}
                  value={resume}
                  required
                />
                <button
                  className="LoginB"
                  disabled={loading}
                  style={{
                    width: "230px",
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  submit
                </button>
              </Stack>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Areg;
