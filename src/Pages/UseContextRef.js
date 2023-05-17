import { useContext, useEffect } from "react"
import { Appstate } from "../App"
import { useRef,useState } from "react";
export const UseContextRef =()=>{
    const Appdata=useContext(Appstate);

const [input,setinput] = useState("");
const inputfield=useRef();
const counter=useRef(0);
useEffect(()=>{
    counter.current=counter.current+1;
},[input])

const clcc=()=>{
    inputfield.current.style.border="3px solid red"
}


const inphandle=(e)=>{
    setinput(e.target.value);
}


    return (
        <div>
            <h1>This is the use of Usecontext and UseRef </h1>
            <h2>{Appdata.name}</h2>
            <h2>{Appdata.Typehook}</h2>
            <h2>{Appdata.Typehook2}</h2>

            <input type="text" ref={inputfield}  value={input} onChange={inphandle} />
            <button onClick={clcc}>Submit</button>
            <h2>this application has been clicked {counter.current} times</h2>
            
        </div>

    )
}