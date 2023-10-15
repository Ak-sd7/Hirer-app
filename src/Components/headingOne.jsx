import { Link } from "react-router-dom"
import "../Styles/h1.css"
import dot from "../assets/dot.svg"
import dot1 from "../assets/dot1.svg"
import dot3 from "../assets/dot3.svg"

const HeadingOne = () => {
  return (
    <div style={{paddingTop: "48px"}}>
        <div className="bagH">
          <div className="introOne">   
            <h1><span style={{color: "#95af29"}}>How</span> It Works...</h1>
            <h2> Introducing Hirer • • • •  A better way to get Hired / Hire</h2>
          </div>
          <div className="about">
              <article className="dou">
                <h2>About Hirer</h2>
                <p>
                Hirer introduces you to the flexibility of job search according to your requirements, offering
                a wide range of opportunities tailored to your skills and interests. Discover your dream career efficiently, 
                as Hirer connects you with companies that match your aspirations, and discovering the perfect job has never 
                been more efficient. Take the first step towards a fulfilling and bright future.
                </p>
              </article>             
              <img className="imagg" src="src\assets\about2.png"/>
              {/* dot image 1 */}
              <img style={{width: "436px"}} src={dot}/>
          </div>
          <div className="logup">
              {/* dot image 2 */}
              <img src={dot3} style={{position: "absolute", left:"0", width:"430px"}}/>
              <img className="imm" src="src\assets\login.png"/>
              <article className="losi">
                <h2>LogIn/SignUp</h2>
                <p> 
                  If not logged In, go to the upper right corner and log in or register yourself according to the 
                  requirements. While registering, fill in all the required details and your personal information won't be 
                  shared (i.e. mobile number, address, etc.). We have security and authentication to protect your data
                  while ensuring that your data is safe with us 🖤.
                </p>
              </article> 
          </div>
          <div className="about">
              <article className="dou">
                <h2>For Hiring professional </h2>
                <p>
                  For the Hiring professionals, Our login page provide a option which should be turned on while 
                  logging as well as while registering. By doing so we are able to identify the requirements of 
                  users and able to take action accordingly. After logging in to the website, the user can hire 
                  according to the job needs/skills. The profile cards of candidates would be shown on the hire   
                  option in the navigation bar. The hirer or the user can hire people by connecting with them 
                  with the contact details provided.
                </p>
              </article>             
              <img className="imagg" src="src\assets\rec.png"/>
              {/* dot image 3 */}
              <img src={dot1} style={{width: "450px", position:"absolute", right:"0", paddingBottom: "15px"}}/>
          </div>
          <div className="logup">
              {/*  */}
              <img className="imm" style={{width:"400px"}} src="src\assets\hh.png"/>
              <article className="losi">
                <h2>Getting Hired</h2>
                <p>
                  The process of getting hired is quite simple. The recruiters would be provided by your profile  
                  data, on the basis of their analysis and requirement criteria they would shortlist some profiles.
                  Later, the shortlisted profiles would be assigned with some assignments and the selected profiles
                  would be shortlisted. The hirig process would be followed by an interview, clearing which you
                  would be able to join the company.
                </p>
              </article>
          </div> 
        </div>
        <div style={{display: "flex", justifyContent:"center", paddingTop:"100px", paddingBottom:"30px"}}>
          <Link to={"/"}><button className="btn">Get Ahead !!</button></Link>
        </div>
        <div className="hh"></div>      
    </div>
  )
}

export default HeadingOne;