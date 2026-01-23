import { useLocation } from "react-router-dom"
import "./Footer.css"

function Footer() {
    const loc = useLocation()
    const name = loc.state?.title
  return (
    <div className='footer-con'>
        {
            name && (
                <div className="footer-wrapper">
                    <div className="footer-icons">
                        <div>
                            <a href="https://www.linkedin.com/in/quintoravenluke/" target="_blank" rel="noopener noreferrer">
                                <img className="footer-img" src="/assets/linkedin.png" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/lukewarmraven/" target="_blank" rel="noopener noreferrer">
                                <img className="footer-img" src="/assets/github.png" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/ravenluke.quinto" target="_blank" rel="noopener noreferrer">
                                <img className="footer-img" src="/assets/fb.png" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-rights"> &copy; {new Date().getFullYear()} Raven Luke E. Quinto. All Rights Reserved.</div>
                </div>
            )
        }        
    </div>
  )
}

export default Footer