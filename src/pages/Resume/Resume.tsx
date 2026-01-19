import "./Resume.css"

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-text">Below is a detailed overview of my technical skills, academic background, and project experiences as a Bachelor of Science in Information Technology student from PUP - Sta. Mesa, Manila.</div>
      <iframe src="/src/assets/resume.pdf"
      width="80%"
      height="600"
      style={{ border: "none" }}
      title="Resume PDF"></iframe>
    </div>
  )
}

export default Resume