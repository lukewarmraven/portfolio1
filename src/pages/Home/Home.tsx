import { Link, useNavigate } from "react-router-dom"
import "./Home.css"

function Home() {
  const nav = useNavigate()
  return (
    <div className="home-container">
      {/* <div>Home Page</div> */}
      <div className='parent-card'>
        <div className='left-card'>
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
          <div className="text-bold left-body">Technical Skills and Expertise
            
            <div className="home-icon-con">
              {/* <img className="home-icon" src="src/assets/js.png" alt="js"/>
              <img className="home-icon" src="src/assets/typescript.png" alt="ts"/>
              <img className="home-icon" src="src/assets/python.png" alt="python" />
              <img className="home-icon" src="src/assets/react.svg" alt="react" />
              <img className="home-icon" src="src/assets/supabase.png" alt="supabase" />
              <img className="home-icon" src="src/assets/s3.png" alt="s3" />
              <img className="home-icon" src="src/assets/cloudfront.png" alt="cf" />
              <img className="home-icon" src="src/assets/lambda.png" alt="lambda" />
              <img className="home-icon" src="src/assets/github.png" alt="github-light" /> */}

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
                  "python.png",
                  "react.svg",
                  "supabase.png",
                  "s3.png",
                  "cloudfront.png",
                  "lambda.png",
                  "github.png",
                ].map((icon, i) => (
                  <img key={`dup-${i}`} src={`src/assets/${icon}`} className="home-icon" />
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
          <div onClick={()=>nav("/resume")} className="right-strip top-strip">
            <div>
                Resume
              </div>
          </div>
          <div onClick={()=>nav("/certificates")} className="right-strip">
            <div>Certificates</div>
          </div>
          <div onClick={()=>nav("/projects")} className="right-strip">
            <div>Projects</div>
          </div>
          <div onClick={()=>nav("/about")} className="right-strip bottom-strip">
            <div>About Me</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home