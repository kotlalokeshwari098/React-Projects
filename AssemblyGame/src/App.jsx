import Header from "./components/Header";
import { languages } from "./language";
import React from "react";
import clsx from "clsx";

export default function App() {

  // state values
  const [currentWord,setCurrentWord]=React.useState('react');
  const [guessLetter,setGuessLetter]=React.useState([]);
  

  
  // derive from state 
  let wrongGuessCount=
        guessLetter.filter(letter => !currentWord.includes(letter)).length;
  
  const isGameWon=
      currentWord.split('').every(letter =>guessLetter.includes(letter));
  const isGameLost=wrongGuessCount >-languages.length-1;
  const isGameOver=isGameWon || isGameLost;
  
  
  // static values
  const alphabets='abcdefghijklmnopqrstuvwxyz'
  
  

  // languages depends on user guessing to kill or save
  const language =
    languages.map((item,index) =>{
      const styles={
        backgroundColor:item.backgroundColor,color:item.color
      }
      const className=clsx({lost:index<wrongGuessCount,won:index>wrongGuessCount})
     return (
     <span 
     style={styles}
      className={className}
      key={item.name}
      >{item.name}
      </span>)
    })


    // letters user guess
  const letters=currentWord.split('').map((letter,index)=>{
    const isGuessed =guessLetter.includes(letter);
    const isCorrect=isGuessed && currentWord.includes(letter)
    const isWrong=isGuessed && !currentWord.includes(letter)
    const className=clsx('letter-box',
      {
      show:isCorrect,
      notShow:isWrong
    })
    return( 
    <span 
    
    className={className}
    key={index}
    
    >{letter.toUpperCase()}</span>
  )
})

let alphabetsLetters=alphabets.split('').map((letter)=>{
    const isGuessed =guessLetter.includes(letter);
    const isCorrect=isGuessed && currentWord.includes(letter)
    const isWrong=isGuessed && !currentWord.includes(letter)
    const className=clsx('letters-button',
      {
      correct:isCorrect,
      wrong:isWrong
    })

    return (
      <button 
      onClick={()=>storeGuessedLetters(letter)}
      className={className}
      key={letter}>{letter.toUpperCase()}</button>
    )
  })
  // console.log(className)

  // user gussed letter storing in array and checking
  function storeGuessedLetters(letter){
    // console.log('hello')
    
    setGuessLetter(prev => {
      // prev.includes(letter) ? prev :[...prev,letter])
      // or
      const letterSet=new Set(prev)
      letterSet.add(letter);
      return Array.from(letterSet)
    })
  }
  console.log(guessLetter)



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
      <main >
         {alphabetsLetters}
      </main>
     {isGameOver && <button className="decide-button">
         New Game
      </button>}
    </div>
  )
}