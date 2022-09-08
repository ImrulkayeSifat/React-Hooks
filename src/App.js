import './App.css';
import React, { useState,useCallback } from 'react';
import List from './List';

function App() {
  
  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number,number+1,number+2]
  },[number])

  const theme = {
    backgroundColor: dark ? '#333':'#FFF',
    color : dark ? '#FFF': '#333'
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange = {e=>setNumber(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(prevDark => !prevDark)}>change theme</button>
      <List getItems={getItems} />
    </div>
  );
}


export default App;
