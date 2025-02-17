import { useState,useCallback,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import quotes from './components/quotes'

function App() {
  const [quote, setQuote] = useState('');
  const [author,setAuthor]=useState('');
  const [bgColor,setBgcolor]=useState('');
  const [count,setCount]=useState(0);

  const randomQuote=useCallback(
    () => {
       const randomNumber=Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomNumber].text)
        setAuthor(quotes[randomNumber].author)        
    },
  );
  useEffect(() => {
    randomQuote()
  }, [count]);

  return (
    <>
      <div className="container">
        <div className="quote-container">
          <div className="quote">
            <h2>{quote}</h2>
            <h3>-{author}</h3>
          </div>
          <button onClick={()=>setCount(count+1)} >Next</button>
        </div>
      </div>
    </>
  )
}

export default App
