import "./About.css"
function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
          <div className="about-card">
          <div className="about-card-img">
            <img src="/src/assets/about/me.jpg" className="about-myimg" />
          </div>

          <div className="about-card-body">
            <div className="about-card-hello about-card-text">Hello!</div>
            <div className="about-card-text about-card-sub">{"Hi! I am Raven Luke E. Quinto, an aspiring software developer from PUP - Sta. Mesa, currently living in Valenzuela City. I am proficient with React + JS/TS and have experience with BaaS integration and AWS cloud deployment."}</div>
            <div className="about-sub-con">
              <div className="about-sub-group">
                <div>Skills</div>
                <div>images here</div>
              </div>
              <div className="about-sub-group">
                <div>Interest</div>
                <div>images here</div>
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