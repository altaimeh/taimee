import { useState } from 'react'
import reactLogo from './assets/react.svg'
import taimeeLogo from './assets/taimeeLogoWithoutBackground.png';
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://github.com/altaimeh" target="_blank">
          <img src={taimeeLogo} alt="Taimee Logo" style={{ width: '200px' }} />
        </a>
      </div>
      <h1>Homepage</h1>

      <p className="read-the-docs">
        Click on my logo to see my github profile!
      </p>
    </>
  )
}

export default App
