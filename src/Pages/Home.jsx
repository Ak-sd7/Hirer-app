import "../Styles/Home.css"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {

  const texts = [" Hired", " Recognised", " Experience"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    // Update the currentText whenever currentTextIndex changes
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex, texts]);

  return (
      <div className="home">
          <div className="intro">
              <h1 style={{color: "antiquewhite"}}>Work Now</h1>
              <h1 style={{color: "antiquewhite"}}><span style={{color: "#95af29"}}>Get</span>{currentText}</h1> 
              <h1 style={{color: "antiquewhite"}}>Make A Change</h1>
              <br/>
              <h2 style={{color: "#95af29"}}>Connecting Talent with Opportunity:</h2> 
              <h2 style={{color: "antiquewhite"}}>Your Path to Success Begins Here!</h2>
              <br/>
              <Link to={"/getstarted"}><button className="btn">Get Started ↪</button></Link>
          </div>
          <div className="image">
            <img className="i_m" src="src\assets\intro-img.png" alt="image"/>
          </div>
      </div>
  )
}

export default Home
// vector illustration