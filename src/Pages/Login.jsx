import { Stack } from "@mui/material";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useContextProvider } from "../providers";
import TStyle from "../subComponents/TStyle";
import s from "../assets/login-bg.a6f5d4be.svg";
import "../Styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hire, setHire] = useState(false);
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
      const server =
        hire == true
          ? "http://localhost:3000/api/v1/musers"
          : "http://localhost:3000/api/v1/ausers";
      setServer(server);
      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="lmain">
        <form onSubmit={submitHandler}>
          <Stack
            spacing={5}
            paddingLeft={5}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
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
            <div className="toggle-container">
              <h2>
                Are you here to
                <span style={{ color: "antiquewhite" }}> hire ?</span>
              </h2>
              <TStyle
                onClick={() => {
                  setHire(!hire);
                }}
                className="toggle"
              />
            </div>
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
        <div className="belowor">
          <h4 style={{ color: "#95af29" }}>OR</h4>
          <Link to={"/register"} className="ll">
            <h3>Register</h3>
          </Link>
        </div>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <img className="lo" src={s} alt="Login background"/>
      </div>
    </div>
  );
};

export default Login;
