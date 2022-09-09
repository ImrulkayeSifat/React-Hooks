import React, { useImperativeHandle,useState,useRef } from 'react';

function CustomInput(props, ref) {
  useImperativeHandle(ref, () => {
    return { alertHi: () => alert("Hi") }
  })
  return (
    <input
      ref={ref}
      style={{ backgroundColor: "red" }}
      {...props}
    />
  )
}

export default React.forwardRef(CustomInput)