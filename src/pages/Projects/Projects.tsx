import { useNavigate } from "react-router-dom"
import "./Projects.css"
import { certData } from "../../data/certData"
import { useState } from "react"

function Projects() {
  const nav = useNavigate()
  const [expand, setExpand] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpand(prev => (prev === index ? null : index))
  }

  return (
    <div className="proj-container">
      <div className="proj-text">Read about my experiences in seminars, workshops, and competitions below.</div>

      <div className="proj-card-container">
        <div className="proj-card-outer">
          {
            certData.map((v:any, i:number) => {
              const expanded = expand === i

              return(
                <div onClick={()=>nav("/certificates-view",{
                  state: {
                    title: v.title,
                    desc: v.desc,
                    org: v.org,
                    thumb: v.thumb,
                    images: v.images
                  }
                })} className="proj-card-inner" key={i}>
                  <img className="proj-card-img" src={`/src/assets/cert/${v.thumb}`} />
                  <div className="proj-card-text proj-card-title">{v.title}</div>
                  <div className="proj-card-text proj-card-org">{v.org}</div>
                  <div className={`proj-card-text proj-desc ${expanded ? "expanded" : ""}`}>{v.desc}</div>
                  <button
                  className="read-more"
                  onClick={(e) => {
                    e.stopPropagation(); // prevents card click
                    toggleExpand(i);
                  }}
                >
                  {expanded ? "Read less" : "Read more..."}
                </button>
                </div>
            )})
          }

        </div>
      </div>
    </div>
  )
}

export default Projects