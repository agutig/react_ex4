
import './App.css';
import {useState} from 'react'

function App() {

  const numbers = [1, 2, 3, 4, 5];

  
  return (
    <div className="App">

      {numbers.map( (number) => <p key={number}>{number}</p> )}

    </div>
  );
}

export default App;
