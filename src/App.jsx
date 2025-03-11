import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Hire from "./Pages/Hire";
import GetHired from "./Pages/getHired";
import HeadingOne from "./Components/headingOne";
import { Toaster } from "react-hot-toast";
import "./Styles/App.css";
import { useContextProvider } from "./providers";
import { useEffect } from "react";
import axios from "axios";
import Mprofile from "./Components/Mprofile";
import Aprofile from "./Components/Aprofile";

function App() {
  const { setIsAuthenticated, setUser, setLoading, server, user } =
    useContextProvider();
  console.log(server);
  useEffect(() => {
    setLoading(true);

    if (server === "") {
      setUser({});
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    axios
      .get(`${server}/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response?.data?.message || "Failed to authenticate");
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, [server]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/getstarted" element={<HeadingOne />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/getHired" element={<GetHired />} />
        <Route path={`/mprofile/${user?.name}`} element={<Mprofile />} />
        <Route path={`/aprofile/${user?.name}`} element={<Aprofile />} />
        {/* <Route path="*" element={<Home/>}/> */}
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
