import './App.css';
import React, { useState,useId } from 'react';
//https://blog.webdevsimplified.com/2022-06/use-id/
function App() {
  const id = useId()

  return (
    <>
      <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email" />
      </div>
      <div>
        <label htmlFor={`${id}-password`}>Password</label>
        <input id={`${id}-password`} type="password" />
      </div>
    </>
  );
}


export default App;
