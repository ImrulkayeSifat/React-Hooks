import './App.css';
import React, { useState,useRef, useEffect } from 'react';


function App() {
  const [name,setName] = useState('')
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(()=>{
    renderCount.current = renderCount.current +1;
  })

  function focus(){
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)} />
      <div>My name is {name}</div>
      <button onClick={focus}>focus</button>
      <div>I renderd {renderCount.current} times</div>
    </>
  );
}

export default App;
