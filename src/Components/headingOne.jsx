import "../Styles/h1.css"
import dot from "../assets/dot.svg"
import dot1 from "../assets/dot1.svg"
import dot3 from "../assets/dot3.svg"

const headingOne = () => {
  return (
    <div>
        <div className="bagH">
          <div className="introOne">    
            <h1><span style={{color: "#95af29"}}>How</span> It Works...</h1>
            <h2> Introducing Hirer • • • •  A better way to get Hired / Hire</h2>
          </div>
          <div className="about">
              <article className="dou">
                <h2>About Hirer</h2>
                <p>
                  Hirer presents you the flexibility of job search according to your requirements, offering a 
                  diverse range of opportunities tailored to your skills and interests. Discover your dream career 
                  with ease, as Hirer connects you with companies that match your aspirations, finding the perfect job has never 
                  been more efficient. Take the first step towards a fulfilling and successful future.
                </p>
              </article>             
              <img className="imagg" src="src\assets\about2.png"/>
              {/* dot image 1 */}
          </div>
          <div className="logup">
              {/* dot image 4 */}
              <img src={dot1} style={{paddingRight: "70px", width: "450px", rotate:"2deg"}}/>
              <img className="imm" src="src\assets\login.png"/>
              <article className="losi">
                <h2>LogIn/SignUp</h2>
                <p> 
                  sdebjfhkjwbdefikjbvfkjwbgfhkjRF
                  DAHSKFGVWHYKJGFIUQWERGF
                  WKJGRFIUYHQWEGRIHERQ
                  HWIUERGFHI
                </p>
              </article>
          </div>
          <div className="about">
              <article className="dou">
                <h2>For Hiring Profesionals</h2>
                <p>
                  Hirer presents you the flexibility of job search according to your requirements, offering a 
                  diverse range of opportunities tailored to your skills and interests. Discover your dream career 
                  with ease, as Hirer connects you with companies that match your aspirations, finding the perfect job has never 
                  been more efficient. Take the first step towards a fulfilling and successful future.
                </p>
              </article>             
              <img className="imagg" src="src\assets\about2.png"/>
              <img src={dot3} />
          </div>
          <div className="logup">
              <img src={dot}/>
              <img className="imm" src="src\assets\login.png"/>
              <article className="losi">
                <h2>Getting Hired</h2>
                <p>
                  sdebjfhkjwbdefikjbvfkjwbgfhkjRF
                  DAHSKFGVWHYKJGFIUQWERGF
                  WKJGRFIUYHQWEGRIHERQ
                  HWIUERGFHI
                </p>
              </article>
              
          </div> 
        </div>
        <div className="hh"></div>      
    </div>
  )
}

export default headingOne