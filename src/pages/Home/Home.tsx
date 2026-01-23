import { useNavigate } from "react-router-dom"
import "./Home.css"
import { useState } from "react"

function Home() {
  const [hover,setHover] = useState(false)
  const nav = useNavigate()
  return (
    <div className="home-container">
      {/* <div>Home Page</div> */}
      <div className="parent-wrapper">
        <div className='parent-card'>
          <div className='left-card'>
            <div
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className="home-raven-wrapper">
                <img
                onClick={()=>nav("/")} 
                className="home-raven" 
                src={hover ? "/assets/crow-hover.png" : "/assets/crow.png"}
                alt="logo" />
            </div>
            <div className="left-welcome">Welcome!</div>
            <div className="left-body">
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
              </span>
            </div>
            <div className="text-bold left-body left-img-con">Technical Skills and Expertise
              
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
                    <img key={i} src={`/assets/${icon}`} className="home-icon" />
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
                    <img key={`dup-${i}`} src={`/assets/${icon}`} className="home-icon" />
                  ))}
                </div>
              </div>
            </div>
            <div className="left-body left-bottom">
              See more information about myself and my background and experiences in the 
              <span className="text-bold">
                {" "}
                tear-offs 
                {" "}
              </span>
              on the right side.
              To go back here, <span className="text-bold">
                always click on the ravens!
                </span>
            </div>
          </div>

          <div className='right-card'>
            <div onClick={()=>nav("/resume",{
              state: {
                title: "resume"
              }
            })} className="right-strip top-strip">
              <div>
                  Resume
                </div>
            </div>
            <div onClick={()=>nav("/certificates",{
              state: {
                title: "Seminars & Events"
              }
            })} className="right-strip">
              <div>Seminars & Events</div>
            </div>
            <div onClick={()=>nav("/projects",{
              state: {
                title: "projects"
              }
            })} className="right-strip">
              <div>Projects</div>
            </div>
            <div onClick={()=>nav("/about",{
              state: {
                title: "About Me"
              }
            })} className="right-strip bottom-strip">
              <div>About Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home