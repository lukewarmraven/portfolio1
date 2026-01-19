import { useNavigate } from "react-router-dom"
import "./Certificates.css"
function Certificates() {
  const nav = useNavigate()

  const data = [
    {
      title: "Sample 1",
      desc: "sample description 1",
      image: "physics.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    },
    {
      title: "Sample 2",
      desc: "sample description 2",
      image: "cloudfront.png"
    }
  ]
  return (
    <div className="cert-container">
      <div className="cert-text">Read about my experiences in seminars, workshops, and competitions below.</div>

      <div className="cert-card-container">
        <div className="cert-card-outer">
          {
            data.map((v:any, i:number) => (
              <div onClick={()=>nav("/certificates-view")} className="cert-card-inner" key={i}>
                <img className="cert-card-img" src={`/src/assets/${v.image}`} />
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