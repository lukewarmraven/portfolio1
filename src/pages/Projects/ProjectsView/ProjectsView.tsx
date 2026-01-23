import { useLocation } from "react-router-dom"
import "./ProjectsView.css"
import { useState } from "react"

function ProjectsView() {
  const loc = useLocation()
  const title = loc.state?.title
  const role = loc.state?.role
  const file = loc.state?.file
  const type = loc.state?.type
  const desc = loc.state?.desc
  const thumb = loc.state?.thumb
  const images = [thumb,...(loc.state?.images || [])]
  const [current, setCurrent] = useState(0)
  console.log(loc.state);
  console.log(current);

  const nextImg = () => {
    setCurrent(prev => (prev+1) % images.length)
  }

  const prevImg = () =>{
    setCurrent(prev=>(prev-1 + images.length) % images.length)
  }

  return (
    <div className="projview-container">
      <div className="projview-text projview-title">{title}</div>
      <div className="projview-text projview-role">{role}</div>
      <div className="projview-text projview-desc">{desc}</div>
      <div className="projview-img-con">
        {/* <img className="projview-img" src={`/src/assets/cert/${thumb}`} /> */}
        {
          type === "image" && (
            <>
              <button className="projview-prev-btn" onClick={prevImg}>
                <img className="projview-prev" src="/src/assets/play-button.png" />
                {/* <span>{current +1} / {images.length}</span> */}
              </button>
              <img className="projview-img" src={`/src/assets/proj/${images[current]}`} />
              <button className="projview-next-btn" onClick={nextImg}>
                <img className="projview-next" src="/src/assets/play-button.png" />
                {/* <span>{current+1 >= images.length ? (current+2) - images.length : current + 2} / {images.length}</span> */}
              </button>
            </>
          )
        }
        {
          type === "file" && (
            <>
              <iframe src={`/src/assets/proj/${file}`} 
              width="100%"
              height="600"
              style={{ border: "none" }}
              title="Resume PDF"></iframe>
            </>
          )
        }
        
        {/* {
          images.map((v:any,i:number) => (
            <img className="projview-img" key={i} src={`/src/assets/cert/${v}`} />
          ))
        } */}
      </div>
      {
        type === "image" && (
          <>
            <div>
              {current + 1} / {images.length}
            </div>
          </>
        )
      }
    </div>
  )
}

export default ProjectsView