import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import Login from "./Pages/Login"
import Hire from "./Pages/Hire"
import HeadingOne from "./Components/headingOne"
import {Toaster} from "react-hot-toast"
import "./Styles/App.css" 

function App() {
  return(
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/getstarted" element={<HeadingOne/>}/>
          <Route path="/hire" element={<Hire/>}/>
          {/* <Route path="*" element={<Home/>}/> */}
        </Routes>
        <Toaster/>
    </Router>
  )
}

export default App
