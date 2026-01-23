import { useLocation } from "react-router-dom"
import "./CertificateView.css"
import { useState } from "react"

function CertificateView() {
  const loc = useLocation()
  const title = loc.state?.title
  const desc = loc.state?.desc
  const thumb = loc.state?.thumb
  const images = [thumb,...(loc.state?.images || [])]
  const [current, setCurrent] = useState(0)
  // console.log(current);
  // console.log(current - images.length);

  const nextImg = () => {
    setCurrent(prev => (prev+1) % images.length)
  }

  const prevImg = () =>{
    setCurrent(prev=>(prev-1 + images.length) % images.length)
  }

  return (
    <div className="certview-container">
      <div className="certview-text certview-title">{title}</div>
      <div className="certview-text certview-desc">{desc}</div>
      <div className="certview-img-con">
        {/* <img className="certview-img" src={`/src/assets/cert/${thumb}`} /> */}
        <button onClick={prevImg}>
          <img className="certview-prev" src="/src/assets/play-button.png" />
          <span>{current+1 <= 1 ? images.length : current} / {images.length}</span>
        </button>
        <img className="certview-img" src={`/src/assets/cert/${images[current]}`} />
        <button onClick={nextImg}>
          <img className="certview-next" src="/src/assets/play-button.png" />
          <span>{current+1 >= images.length ? (current+2) - images.length : current + 2} / {images.length}</span>
        </button>
        {/* {
          images.map((v:any,i:number) => (
            <img className="certview-img" key={i} src={`/src/assets/cert/${v}`} />
          ))
        } */}
      </div>
    </div>
  )
}

export default CertificateView