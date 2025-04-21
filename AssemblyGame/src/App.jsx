import Header from "./components/Header";
import { languages } from "./language";
import React from "react";
import clsx from "clsx";
import { getFarewellText } from "./utils";
import { getRandomWord } from "./utils";

export default function App() {

  // state values
  const [currentWord,setCurrentWord]=React.useState(()=>getRandomWord());
  let [guessLetter,setGuessLetter]=React.useState([]);
  // console.log(currentWord)
  // console.log(guessLetter)

  

  // derive from state 
  const numGuessesLeft=languages.length-1;
  let wrongGuessCount=
        guessLetter.filter(letter => !currentWord.includes(letter)).length;
  
  const isGameWon=
      currentWord.split('').every(letter =>guessLetter.includes(letter));
  const isGameLost=wrongGuessCount >= languages.length-1;
  const isGameOver=isGameWon || isGameLost;
  
  
  // static values
  const alphabets='abcdefghijklmnopqrstuvwxyz'
  
  // console.log(getFarewellText())

  // languages depends on user guessing to kill or save
  const language =
    languages.map((item,index) =>{
      const styles={
        backgroundColor:item.backgroundColor,color:item.color
      }
      const className=clsx({lost:index < wrongGuessCount,won:index>wrongGuessCount})
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
    // console.log(isGuessed)
    const isCorrect=isGuessed && currentWord.includes(letter)
    const isWrong=isGuessed && !currentWord.includes(letter)
    let shouldRevelLetter=isGameLost || isGuessed
    // console.log(shouldRevelLetter)
    const className=clsx('letter-box',
      {
      show:isCorrect,
      notShow:isWrong,
      
    })
    return( 
    <span 
    
    className={className}
    key={index}
    
    >{shouldRevelLetter ? letter.toUpperCase():''}</span>
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
      disabled={isGameOver}
      aria-disabled={guessLetter.includes(letter)}
      arial-label={`letter ${letter}`}
      key={letter}>
        {letter.toUpperCase()}</button>
    )
  })
  // console.log(className)

  // user gussed letter storing in array and checking
  function storeGuessedLetters(letter){
    // console.log('hello')
    
    setGuessLetter(prev => (
      prev.includes(letter) ? prev :[...prev,letter])
      // or
      // const letterSet=new Set(prev)
      // letterSet.add(letter);
      // return Array.from(letterSet)
    )
  }
  console.log(guessLetter)

  const lang=languages.map((item)=>item.name)
  // console.log(lang)
  
  function resetGame(){
    setCurrentWord(getRandomWord())
    setGuessLetter([])

  }




  return (
    <>
    <div className="score-card">

    </div>
     <div className="container">
      <header>
        <h2>Assembly:Endgame</h2>
        <p>Guess the word in under 8 attempt to keep the programming world safe from Assembly!</p>
      </header>

      {
        !isGameOver && 
         <section className="game-status1">
         { wrongGuessCount > 0 && getFarewellText(lang[wrongGuessCount-1])}
         </section>
      }

      {
        isGameOver && <section aria-live="polite" role="status" className="game-status">
        {isGameWon && <div className="win-status">
             <div>You win!</div>
              <div>Well done🎉</div></div>}
              
        {isGameLost && <div className="lost-status">
          <div>Game Over!</div>
          <div>You lose! Better start learning Assembly😭</div>
          </div>}
      </section>
      }

      <section className="languageChips">
        {language}
      </section>
      
       
       <section className="letter-blocks">
        {letters }
        
      </section>

       {/* combines visally-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role='status'>
        <p>
          {currentWord.includes(guessLetter[guessLetter.length-1])?`correct!the letter ${guessLetter[guessLetter.length-1]} is in the word ` :`sorry the letter${guessLetter[guessLetter.length-1]} is not in the word`}
          You have {numGuessesLeft}  attempts left
        </p>
        <p>Current word :{currentWord.split('').map(letter=> guessLetter.includes(letter ?letter +'.' : "blank"))}</p>

      </section>

      {/* keyboard */}
      <main >
         {alphabetsLetters}
      </main>
     {isGameOver && <button className="decide-button"
     onClick={resetGame}>
         New Game
      </button>}
    </div>
    </>
   
  )
}