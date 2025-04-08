import {BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import States from './pages/States.jsx'
import Festival from './pages/Festival.jsx'
import StateFestivals from './pages/StateFestivals.jsx'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/state' element={<States />} />
        <Route path='/state/:stateName' element={<StateFestivals />} />
        <Route path='/state/:stateName/:id' element={<Festival />} />
        <Route path='/about' element={<About />}/>
        </Route>
       
      </Routes>

      
    </BrowserRouter>
  )

}



createRoot(document.getElementById('root')).render(

    <App />
)
