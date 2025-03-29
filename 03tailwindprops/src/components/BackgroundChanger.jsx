import React, { useState } from "react";

const BackgroundChanger = (props) => {
    const [colorChanger, setColorChanger] = useState("olive")

    return (
        <>
        <div className="w-full h-screen duration-200" style={{background: colorChanger}}>
        <button onClick={()=> setColorChanger("black")}>Black</button>
        <button onClick={()=> setColorChanger("green")}>Green</button>
        <button onClick={()=> setColorChanger("yellow")}>Yellow</button>
        </div>
       
          
        </>
    )
}
export default BackgroundChanger;