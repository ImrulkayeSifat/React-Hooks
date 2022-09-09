import './App.css';
import React, { useState,useRef } from 'react';
import CustomInput from './CustomInput'
//https://blog.webdevsimplified.com/2022-06/use-imperative-handle/
function App() {
  const [value, setValue] = useState("red")
  const inputRef = useRef()
  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </>
  );
}


export default App;
