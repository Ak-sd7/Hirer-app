import { Stack } from "@mui/material";
import { useState } from "react";
import TStyle from "../subComponents/TStyle";
import { toast } from "react-hot-toast";
import Areg from "./Areg";
import "../Styles/reg.css";
import { useContextProvider } from "../providers";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Mreg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [showAreg, setShowAreg] = useState(false);

  const {
    isAuthenticated,
    setIsAuthenticated,
    loading,
    setLoading,
    setServer,
  } = useContextProvider();

  const submitHandler = async (e) => {
    e.preventDefault();
    const server = "http://localhost:3000/api/v1/musers";
    setServer(server);
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/new`,
        { name, email, password, companyName, phoneNo },
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
    return <Navigate to={"/hire"} />;
  }

  return (
    <div>
      {showAreg ? (
        <Areg />
      ) : (
        <>
          <div className="st">
            <h1>For Hirers : </h1>
            <div className="togg">
              <h3>
                Are you a{" "}
                <span style={{ color: "antiquewhite" }}> Jobseeker ?</span>
              </h3>
              <TStyle
                className="toggle"
                size="small"
                onClick={() => setShowAreg(!showAreg)}
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
                  placeholder="company Name"
                  type="text"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                  value={companyName}
                  required
                />
                <button
                  className="LoginB"
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
export default Mreg;
