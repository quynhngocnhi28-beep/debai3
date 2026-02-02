import { useState } from "react";
import './Counter.css'

function Counter(){
    const[count, setCount]= useState(0);
    const handleClick = () => {
        setCount(count +1);
    };
    
    return(
        <div className="counter-container">
            <h2>Component Counter</h2>
            <p>Bạn đã click: {count} lần</p>
            <button onClick={handleClick}>
                Click để tăng
            </button>
        </div>
    )
}
export default Counter;
