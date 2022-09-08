import React from 'react';
import { useTheme,useThemeUpdate } from './ThemeContext';

export default function functionContextComponent(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const darkTheme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toggleTheme = useThemeUpdate();
  
  const themeStyles = {
    backgroundColor:darkTheme?'#333':'#CCC',
    color:darkTheme?'#CCC':'#333',
    padding : '2rem',
    margin : '2rem',
  }
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>    
    </>

  )
}