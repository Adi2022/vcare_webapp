import { useState } from 'react'
import Routing from './Routing/Routing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routing/>
    </>
  )
}

export default App
