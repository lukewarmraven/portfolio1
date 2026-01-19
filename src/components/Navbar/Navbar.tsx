import { useLocation, useNavigate } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const nav = useNavigate()
  const loc = useLocation()
  const name = loc.state?.title
  const title = name?.replace("/","")[0].toUpperCase() + name?.slice(1) 
  console.log(name);
  console.log(title);
  console.log(isNaN(title));
  

  return (
    <div className="nav-container">
      <div className="nav-left">
        {
          name && (
            <div>
              <img onClick={()=> nav("/")} className="nav-logo" src="/src/assets/white-crow.png" alt="logo" />
              <div className="nav-title">{Number.isNaN(title) ? "" : title}</div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar