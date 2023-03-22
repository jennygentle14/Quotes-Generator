import React, {useEffect, useState} from 'react';


function App() {
  const [author, setAuthor]= useState('');
  const [quote, setQuote]=useState('');
  useEffect(()=>{
    newQuotes()
  },[]);
  
  const newQuotes = ()=>{
    let allQuotes =`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(allQuotes)
    .then(res => res.json())
    .then(data => {
      let dataQuotes= data.quotes;
      console.log(dataQuotes);
      
      let randomQuote= Math.floor(Math.random()* dataQuotes.length);
      let newRanQuote= dataQuotes[randomQuote];

      setQuote(newRanQuote.quote);
      setAuthor(newRanQuote.author);
    })
  }
  const handleClick =() => {
    newQuotes();
   }
  
  
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div className="main">
      <p className="text">{quote}</p>
      <i className="aut">{author}</i>
      <button onClick={handleClick}>New Quote</button>
      </div>
      
          
    </div>
  )
}

export default App;

