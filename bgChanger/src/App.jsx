import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button 
            onClick={()=>{
              setColor('red')
            }}
            className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
            style={{background:"red"}}>Red</button>

            <button 
            onClick={()=>{
              setColor('green')
            }}
            className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
            style={{background:"green"}}>Green</button>

            <button 
            onClick={()=>{
              setColor('blue')
            }}
            className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
            style={{background:"blue"}}>Blue</button>


            <button 
            onClick={()=>{
              setColor('black')
            }}
            className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
            style={{background:"black"}}>Black</button>


            <button 
            onClick={()=>{
              setColor('purple')
            }}
            className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
            style={{background:"purple"}}>Purple</button>


            <button 
            onClick={()=>{
              setColor('orange')
            }}
            className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
            style={{background:"orange"}}>Orange</button>


            <button onClick={()=>{
              setColor('brown')
            }}
            className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
            style={{background:"brown"}}>brown</button>
          </div>
        </div>
      </div>
  )
}

export default App
