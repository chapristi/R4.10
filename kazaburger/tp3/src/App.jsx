import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulaire from "./components/Formulaire.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-5">
        <header className="title">
            <h1 className="text-center">Mon formulaire</h1>
        </header>

        <div className="container">
            <Formulaire />
        </div>
    </div>
  )
}

export default App
