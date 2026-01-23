import "./Footer.css"

function Footer() {
  return (
    <div className='footer-con'>
        <div className="footer-icons">
            <div>
                <a href="https://www.linkedin.com/in/quintoravenluke/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-img" src="/src/assets/linkedin.png" />
                </a>
            </div>
            <div>
                <a href="https://github.com/lukewarmraven/" target="_blank" rel="noopener noreferrer">
                    <img className="footer-img" src="/src/assets/github.png" />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/ravenluke.quinto" target="_blank" rel="noopener noreferrer">
                    <img className="footer-img" src="/src/assets/fb.png" />
                </a>
            </div>
        </div>
        <div className="footer-rights"> &copy; {new Date().getFullYear()} Raven Luke E. Quinto. All Rights Reserved.</div>
        
    </div>
  )
}

export default Footer