import "../Styles/Home.css"
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom'
import Counting from "../subComponents/counting";
import Infinite_scroller from "../subComponents/Infinite_scroller";
// import Header from "../Components/Header";
// import H1 from "../Components/headingOne";

const Home = () => {

  // This rule aims to prevent potential bugs and performance issues by ensuring that all dependencies of the useEffect and useMemo hooks are specified in their dependency arrays.
  const texts = useMemo(()=>[" Hired", " Recognised", " Experienced"], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    // Update the currentText whenever currentTextIndex changes
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, texts]);

  return (
    <div>
      <div className="home">
        {/* <Header/> */}
          <div className="intro">
              <h1>Work Now</h1>
              <h1><span style={{color: "#95af29"}}>Get</span>{currentText}</h1> 
              <h1>Make A Change</h1>
              <br/>
              <h3 style={{color: "#95af29"}}>Connecting Talent with Opportunity:</h3>
              <h3>Explore the possibilities.</h3>
              <h3>Elevate Your Journey.</h3>
              <h3>Your Path to Success Begins Here!</h3>
              <br/>
              <Link to={"/getstarted"}><button className="btn">Get Started ↪</button></Link>
          </div>
          <div className="image">
            <img className="i_m" src="src\assets\intro-img.png" alt="image"/> 
            {/* vector illustration */}
          </div>
      </div>
      <div className="hh" id="here"></div>
      <Counting/>
      {/* <div className="hh" id="here"></div> */}
      <Infinite_scroller/>
    </div>
  )
}

export default Home
