import React from 'react';
import './App.css'
import Dies from './components/Dies'
import { nanoid } from 'nanoid';


export default function App() {
  let [array, setArray] = React.useState(generateAllDice())


  function generateAllDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * 6) + 1;
      newArray.push(
        {value:random,
        isHeld:false,
         id:Date.now()});
    }
    console.log(newArray)
    return newArray;
  }

  {/* mapping over dice array to render */ }
  const diceElements = array.map((item) =>
     (<Dies value={item.value} />))

  return (
    <>
      <div className="container">
        <div className="die-container">
          {diceElements}
        </div>
        <button className='roll-button'
          onClick={() => setArray(generateAllDice)}>Roll</button>
      </div>
    </>

  )
}