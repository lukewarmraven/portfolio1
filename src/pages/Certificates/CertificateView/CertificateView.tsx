import { useLocation } from "react-router-dom"
import "./CertificateView.css"

function CertificateView() {
  const loc = useLocation()
  const title = loc.state?.title
  const desc = loc.state?.desc
  const thumb = loc.state?.thumb
  const images = loc.state?.images
  // console.log(images);
  

  return (
    <div className="certview-container">
      <div className="certview-text certview-title">{title}</div>
      <div className="certview-text">{desc}</div>
      <div>
        <img className="certview-img" src={`/src/assets/cert/${thumb}`} />
        {
          images.map((v:any,i:number) => (
            <img className="certview-img" key={i} src={`/src/assets/cert/${v}`} />
          ))
        }
      </div>
    </div>
  )
}

export default CertificateView