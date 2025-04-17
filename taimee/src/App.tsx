import taimeeLogo from './assets/taimeeLogoWithoutBackground.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <div className="homepage">
              <div className="hero-section">

                <h1 className="hero-title">Hi, I'm Taimee</h1>
                <p className="hero-subtitle">Full Stack Developer • Problem Solver • Tech Enthusiast</p>
                <div className="hero-buttons">
                  <a href="https://github.com/altaimeh" target="_blank" className="btn-primary">Visit GitHub</a>

                </div>
              </div>
            </div>
          } />

          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
