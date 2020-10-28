import React from 'react';
import './App.css';
import WDlogo from "./WDlogo.js"
import gamificationcode from "./gamificationcode.jpg"
import ntoc from "./ntoc.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="NTOC">
        Join us for #NTOC2020 <span role ="img" aria-labelledby ="tree">🌳</span>  <br/> <img src={ntoc} alt ="NTOC Logo" height ="200"/>
        <img src={gamificationcode} alt ="QRcode" height="200"/>
        </div> 
        <p>
          Our website is under construction! <span role ="img" aria-labelledby ="tree">🏗👷‍♀️</span>
        </p>
        <WDlogo/>
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
