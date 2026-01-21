import { useNavigate } from "react-router-dom"
import "./Certificates.css"
import { certData } from "../../data/certData"

function Certificates() {
  const nav = useNavigate()

  return (
    <div className="cert-container">
      <div className="cert-text">Read about my experiences in seminars, workshops, and competitions below.</div>

      <div className="cert-card-container">
        <div className="cert-card-outer">
          {
            certData.map((v:any, i:number) => (
              <div onClick={()=>nav("/certificates-view",{
                state: {
                  title: v.title,
                  desc: v.desc,
                  thumb: v.thumb,
                  images: v.images
                }
              })} className="cert-card-inner" key={i}>
                <img className="cert-card-img" src={`/src/assets/${v.thumb}`} />
                <div className="cert-card-text">{v.title}</div>
                <div className="cert-card-text">{v.desc}</div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Certificates