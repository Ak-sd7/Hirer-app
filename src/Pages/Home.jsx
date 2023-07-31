import "../Styles/Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
      <div className="home">
          <div className="intro">
              <h1 style={{color: "antiquewhite"}}>Work Now</h1>
              <h1 style={{color: "antiquewhite"}}><span style={{color: "#95af29"}}>Get</span> Hired</h1> 
              <h1 style={{color: "antiquewhite"}}>Make A Change</h1>
              <br/>
              <h2 style={{color: "#95af29"}}>Connecting Talent with Opportunity:</h2> 
              <h2 style={{color: "antiquewhite"}}>Your Path to Success Begins Here!</h2>
              <br/>
              <Link to={"/getstarted"}><button className="btn">Get Started ↪</button></Link>
          </div>
          <div className="image">
            <img className="i_m" src="https://media.istockphoto.com/id/1392122525/vector/career-development-concept-modern-vector-illustration-with-people-team-working-together-for.jpg?s=170667a&w=0&k=20&c=JuqDrVhGzE5CA8LiqUDz8PCYyuTdrtRSHD6OJARO_uM=" alt="image"/>
          </div>
      </div>
  )
}

export default Home
// vector illustration