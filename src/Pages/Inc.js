import { useState } from "react";
export const Inc = () => {
    const [num, setNum] = useState(1);
    function Incc(n) {
        setNum(num + n);
    }
    function Dec(n) {
        setNum(num - n);
    }
    function Multi(n) {
        setNum(num * n);
    }
    function Dive(n) {
        setNum(num / n);
    }
    function clr() {
        setNum(0);
    }
    return (
        <>
            <div className="Inc">
                <h1>{num}</h1>
            </div>
            <div className="buttons">
                <div className="btc">

                <div className="btcc">   <button onClick={() => Incc(2)}>Increment</button> </div>
                    <div className="btcc"><button onClick={() => Dec(1)}>Decrement</button> </div>
                    <div className="btcc">  <button onClick={() => Multi(2)}>Multiply</button></div>
                    <div className="btcc"> <button onClick={() => Dive(2)}>Divide</button></div>
                    <div className="btcc"><button onClick={clr}>Clear</button></div>
                </div>
            </div>
        </>
    )
};