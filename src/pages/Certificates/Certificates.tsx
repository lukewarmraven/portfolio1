import { useNavigate } from "react-router-dom"
import "./Certificates.css"
import { certData } from "../../data/certData"
import { useState } from "react"

function Certificates() {
  const nav = useNavigate()
  const [expand, setExpand] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpand(prev => (prev === index ? null : index))
  }

  return (
    <div className="cert-container">
      <div className="cert-text">Read about my experiences in seminars, workshops, and competitions below.</div>

      <div className="cert-card-container">
        <div className="cert-card-outer">
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
                })} className="cert-card-inner-con" key={i}>
                  <div className="cert-card-inner">
                      <img className="cert-card-img" src={`/src/assets/cert/${v.thumb}`} />
                      <div className="cert-card-text cert-card-title">{v.title}</div>
                      <div className="cert-card-text cert-card-org">{v.org}</div>
                      <div className={`cert-card-text cert-desc ${expanded ? "expanded" : ""}`}>{v.desc}</div>
                      <button
                      className="read-more"
                      onClick={(e) => {
                        e.stopPropagation(); // prevents card click
                        nav("/certificates-view",{
                        state: {
                          title: v.title,
                          desc: v.desc,
                          org: v.org,
                          thumb: v.thumb,
                          images: v.images
                        }})
                      }}
                    >
                      {expanded ? "Read less" : "Read more..."}
                    </button>
                  </div>
                </div>
            )})
          }

        </div>
      </div>
    </div>
  )
}

export default Certificates