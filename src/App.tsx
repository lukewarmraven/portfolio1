import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Certificates from './pages/Certificates/Certificates'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Resume from './pages/Resume/Resume'
import CertificateView from './pages/Certificates/CertificateView/CertificateView'
import ProjectsView from './pages/Projects/ProjectsView/ProjectsView'

function App() {

  return (
    <div>
      {/* <div>App Page</div> */}

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/certificates' element={<Certificates />}/>
        <Route path='/certificates-view' element={<CertificateView />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/projects-view' element={<ProjectsView />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
