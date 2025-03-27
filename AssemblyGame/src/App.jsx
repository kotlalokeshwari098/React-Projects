import Header from "./components/Header";
import { languages } from "./language";
import React from "react";

export default function App() {
  const [currentWord,setCurrentWord]=React.useState('react')

  const alphabets='abcdefghijklmnopqrstuvwxyz'

  // languages depends on user guessing to kill or save
  const language =
    languages.map((item) =>{
      const styles={
        backgroundColor:item.backgroundColor,color:item.color
      }
     return (
     <span 
      style={styles}
      key={item.name}
      >{item.name}
      </span>)
    })


    // letters user guess
  const letters=currentWord.split('').map((letter,index)=>{
    return( 
    <span 
    className="letter-box"
    key={index}
    >{letter.toUpperCase()}</span>
  )
})

  let alphabetsLetters=alphabets.split('')
  let displayAlphabets=alphabetsLetters.map((letter)=>{
    return (
      <button key={letter}>{letter}</button>
    )
  })
  console.log(displayAlphabets)
      


  return (
    <div className="container">
      <header>
        <h2>Assembly:Endgame</h2>
        <p>Guess the word in under 8 attempt to keep the programming world safe from Assembly!</p>
      </header>
      <section className="game-status">
        <div>You win!</div>
        <div>Well done🎉</div>

      </section>
      <section className="languageChips">
        {language}
      </section>
      <section className="letter-blocks">
        {letters}
      </section>
      <main>
         {displayAlphabets}
      </main>
    </div>
  )
}