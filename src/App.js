import './App.css';
import React, { useState } from 'react';
import ListL from './ListL';

function App() {

  const [input,setInput] = useState('');

  function handleChange(e){
    setInput(e.target.value);
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <ListL input={input}/>
    </>
  );
}


export default App;
