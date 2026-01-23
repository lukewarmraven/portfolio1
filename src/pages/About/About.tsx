import { useState } from "react"
import "./About.css"
import { useNavigate } from "react-router-dom"
function About() {
  const [hover,setHover] = useState(false)
  const nav = useNavigate()
  return (
    <div className="about-container">
      <div className="about-wrapper">
          <div className="about-card">
          <div className="about-card-img">
            <img src="/src/assets/about/me.jpg" className="about-myimg" />
          </div>

          <div className="about-card-body">
            <div
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className="about-raven-wrapper">
                <img
                onClick={()=>nav("/")} 
                className="about-raven" 
                src={hover ? "/src/assets/crow-hover.png" : "/src/assets/crow.png"}
                alt="logo" />
                
            </div>
            <div className="about-card-hello about-card-text">Hello!</div>
            <div className="about-card-text about-card-sub">
              I am <span className="text-bold">
                {" "}
                Raven Luke E. Quinto
                </span> 
              , a <span className="text-bold">
                4th Year BSIT student {" "}
                </span> 
                and
              aspiring fullstack / software developer from 
              <span className="text-bold">
              {" "}
              Polytechnic
              University of the Philippines-Sta. Mesa, Manila. 
              {" "}
              </span> 
              </div>
            <div className="about-sub-con">
              <div className="about-sub-group">
                <span className="text-bold">

                Technical Skills and Expertise
                </span>
                <div className="home-icon-con">
                  <div className="icon-track">
                    {[
                      "js.png",
                      "typescript.png",
                      "python.png",
                      "physics.png",
                      "supabase.png",
                      "s3.png",
                      "cloudFront.png",
                      "lambda.png",
                      "github.png",
                    ].map((icon, i) => (
                      <img key={i} src={`src/assets/${icon}`} className="home-icon" />
                    ))}

                    {/* duplicate once for seamless loop */}
                    {[
                      "js.png",
                      "typescript.png",
                      "python.png",
                      "physics.png",
                      "supabase.png",
                      "s3.png",
                      "cloudFront.png",
                      "lambda.png",
                      "github.png",
                    ].map((icon, i) => (
                      <img key={`dup-${i}`} src={`src/assets/${icon}`} className="home-icon" />
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
            <div className="about-contacts-con">
                <div>
                  <img className="about-contacts-icon" src="/src/assets/phone-call.png" alt="" />
                  <div className="about-card-sub">09684319082</div>
                  <img className="about-contacts-icon" src="/src/assets/arroba.png" alt="" />
                  <div className="about-card-sub">quintoravenluke@gmail.com</div>
                </div>
            </div>
          </div>
        </div>
        <div className="about-card-under"></div>
      </div>
      
    </div>
  )
}

export default About