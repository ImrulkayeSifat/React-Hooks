import { useEffect } from "react";

export default function useUpdateLogger(value){
  useEffect(()=>{
    console.log("change value : "+value);
  },[value])
}