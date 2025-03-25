import React from 'react';
import './App.css'
import Dies from './components/Dies'
import { nanoid } from 'nanoid';
import Confetti from "react-confetti";


export default function App() {
  let [array, setArray] = React.useState(()=>generateAllDice())
  const buttonRef=React.useRef(null)
  

  let gameWon = false;
  if (
    array.every(val => val.isHeld) &&
    array.every(val => val.value === array[0].value)
  ) {
    console.log("You won")
    gameWon = true;
  }


  React.useEffect(()=>{
       if(gameWon){
        buttonRef.current.focus();
       }
  },[gameWon])


  function generateAllDice() {
    console.log('generated al dice was called')
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * 6) + 1;
      newArray.push(
        {
          value: random,
          isHeld: false,
          id: nanoid()
        });
    }
    console.log(newArray)
    return newArray;
  }


  // passing this function as prop to child and changing its isHeld property and we know of which dice to change by id based on the click in child
  function hold(id) {
    setArray(old => old.map((item) => {
      if (item.id === id)
        return { ...item, isHeld: !item.isHeld }
      else return item;
    }))
  }

  // to roll the dice ie change values
  function rollDice(e) {
    console.log(e.target.innerText)
    // setArray(generateAllDice)
    setArray(oldDice => oldDice.map((item) => (
      item.isHeld ? item : { ...item, value: Math.floor(Math.random() * 6) + 1 }
    )))

    if(e.target.innerText === "New Game"){
      setArray(()=>
            generateAllDice()
         )
    }
  }


  {/* mapping over dice array to render */ }
  const diceElements = array.map((item) =>
    (<Dies value={item.value} key={item.id} isHeld={item.isHeld} holds={() => hold(item.id)} />))

  return (
    <>
    {gameWon && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div aria-live='polite' className='sr-only'>
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again</p>}
      </div>
      <div className="container">
        <div className="heading">
          <h2>Tenzies</h2>
          <p>Roll until all dice are the same.Click each die to freeze it at its current vale between rolls.</p>

        </div>
        <div className="die-container">
          {diceElements}
        </div>
        <button ref={buttonRef}   className='roll-button'
          onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
      </div>
      
    </>

  )
}