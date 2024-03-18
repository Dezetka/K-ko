import React, {useState} from "react";

import { button_counter } from "./Counter.module.scss";
import { box } from "./Counter.module.scss";
import { boxed } from "./Counter.module.scss";

export const Counter = () => {
    const [counter,setCounter] = useState(0)
    const increase = () => {
        setCounter(counter + 1);
    };
    const decrease = () => {
        if(counter > 0) {
        setCounter(counter - 1);
        } 
    }
    return (
        <>
            <div className={box}>
                <div className={boxed}>
                <p>{counter}</p>
                </div>
                <button className={button_counter} onClick={increase}>Increase</button>
                <button className={button_counter} onClick={decrease}>Decrease</button>
            </div>
            <hr></hr>
        </>
    )
}