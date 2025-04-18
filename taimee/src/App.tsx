import taimeeLogo from './assets/taimeeLogoWithoutBackground.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import professionalPicture from './assets/professionalPictureNoBackground.png';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </div>
        </Router>
      </div>

    </>
  );
}

export default App;
