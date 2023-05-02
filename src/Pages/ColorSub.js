import React from "react";
import { useState } from "react";
export const ColorSub = () => {
    const [colorr1, setColor1] = useState("yellow");
    const [colorr2, setColor2] = useState("yellow");
    const [colorr3, setColor3] = useState("yellow");
    function S1() {
        setColor1("red");
        window.alert("Button Red is clicked");
    }
    function S2() {
        setColor2("blue");
        window.alert("Button blue is clicked");
    }
    function S3() {
        setColor3("green");
        window.alert("Button green is clicked");
    }
    return (
        <div className="Colsub">
            <div className="Colsubb">
                <div className="sub"><button onClick={S1} style={{ backgroundColor: colorr1 }}>Submit-1</button></div>
                <div className="sub"><button onClick={S2} style={{ backgroundColor: colorr2}}>Submit-2</button></div>
                <div className="sub"><button onClick={S3} style={{ backgroundColor: colorr3}}>Submit-3</button></div>
            </div>
        </div>
    )
};