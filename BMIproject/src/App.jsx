import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  // making state of our application
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setbmi] = useState('')
  const [message, setMessage] = useState('')
  function calc(){
    let value=(Number(weight)/Math.pow(Number(height),2))*703
    setbmi(value.toFixed(2))
      if(value<18.5) setMessage("underweight")
      else if(value>=18.5 && value<=24.9) setMessage("normal weight")
      else if(value>=25 && value<=29.9) setMessage("Overweight")
      else  setMessage("Obese")

  }
  const handleChange = (e) => {
    console.log(e);             // Logs the entire event object
    console.log(e.target);      // Logs the input element itself
    console.log(e.target.value); // Logs the current value in the input field
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI calculator</h2>
        <form action="" onSubmit={(e)=> e.preventDefault()}>
          <div>
            <label>Weight(ibs)</label>
            <input type="text" placeholder='Enter weight value' value={ weight } 
            onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height(in)</label>
            <input type="text" placeholder='Enter height value' value={height} 
             onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <input type="text" onChange={handleChange} placeholder="Type something..." />


          <button className="btn btn-outline" type='submit' onClick={calc} >Submit</button>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
