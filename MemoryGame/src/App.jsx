import Card from "./components/Card";
import './App.css'
import React from "react";
import { nanoid } from 'nanoid';

export default function App() {
  let [array, setArray] = React.useState(() => generateCards())
  const [flippedCards, setFlippedCards] = React.useState([]);
  const [isGameReset,setIsGameReset] = React.useState(false)


  function generateCards() {
    // let count=0;
    let newArray = []
    let items = ['🦄', ' 🌟', ' 🐱', ' 🚀', '😍', '🍬', '👾',
      '✈️', '🦄', ' 🌟', ' 🐱', ' 🚀', '😍', '🍬',
      '👾', '✈️'];

    // implementing Fisher-Yates shuffle
    for (let j = items.length - 1; j > 0; j--) {
      let random = Math.floor(Math.random() * (j + 1));
      [items[j], items[random]] = [items[random], items[j]];
    }

    for (let i = 0; i <= 15; i++) {
      newArray.push({
        item: items[i],
        key: nanoid(),
        isHidden: false
      })
    }
    return newArray;
  }


  function showCard(id) {
    setArray(oldarray => (
      oldarray.map((item) => {
        if (item.key === id)
          return { ...item, isHidden: !item.isHidden }
        else return item
      })
    ))
    console.log(id)

    if (flippedCards.length < 2) {

      setFlippedCards(prevFlipped => [...prevFlipped, array.find(item => item.key === id)]);
    }
  }
  console.log("flipped cards:", flippedCards)
  console.log(array);


  React.useEffect(() => {
    if (flippedCards.length === 2) {
      if (flippedCards[0].item === flippedCards[1].item) {
        setArray(oldarray => (
          oldarray.map((items) => {
            if (items.item === flippedCards[0].item)
              return { ...items, isHidden: true }
            else return items
          })
        ))
      }

      else if (flippedCards[0].item !== flippedCards[1].item) {
        setTimeout(() => {
          setArray(oldarray => (
            oldarray.map((item) => {
              if (item.key === flippedCards[0].key || item.key === flippedCards[1].key)
                return { ...item, isHidden: !item.isHidden }
              else return item
            })
          ))
        }, 1000);
      }

      setFlippedCards([])
    }
  }, [flippedCards.length])


  function toggleButtons() {
      if(array.every(item=>item.isHidden)) {
        setIsGameReset(true);
        setArray(generateCards())

      }
  }

  let cards = array.map((thing) => (
    <Card
      value={thing.item}
      isHidden={thing.isHidden}
      showCard={() => showCard(thing.key)} />
  ))


  // console.log(cards)
  return (
    <div className="container">
      <div className="cards">

        {cards}

      </div>

      <button className="main-button" onClick={toggleButtons}>{isGameReset ? 'Reset':'Start'}</button>
    </div>
  )
}