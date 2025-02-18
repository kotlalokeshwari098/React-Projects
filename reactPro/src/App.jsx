import { useState } from 'react'
import './App.css'
import Index from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index />
    </>
  )
}

export default App
