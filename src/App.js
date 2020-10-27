import React from 'react';
import './App.css';
import WDlogo from "./WDlogo.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Our website is under construction! <span role ="img" aria-labelledby ="tree">🌳🌲</span>
        </p>
        <WDlogo />
        In the meantime,
        <a
          className="App-link"
          href="https://woodlanddwelling.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-labelledby = "shopping-cart">🛒</span> Shop for some tools for better tree establishment 
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/pulse/planting-trees-schools-theri-reichlin/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <span role ="img" aria-labelledby ="megaphone">📣</span> Look at one of our Projects 
        </a> Or e-mail us at woodlanddwelling.uk@gmail.com
      </header>
    </div>
  );
}

export default App;
