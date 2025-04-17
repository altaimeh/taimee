import { useState } from 'react'
import taimeeLogo from './assets/taimeeLogoWithoutBackground.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import About from './components/pages/About';
function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>


          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <div style={{ marginTop: '100px' }}> {/* Pushes content below navbar */}

        <h1>Homepage</h1>
        <p className="read-the-docs">
          Click on my logo to see my GitHub profile!
        </p>
      </div>
    </>
  );
}


export default App
