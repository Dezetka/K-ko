import React, {useState} from "react";

import { button } from "./CheckContent.module.scss";
import { box } from "./CheckContent.module.scss"
import { boxed } from "./CheckContent.module.scss"
export const CheckContent = () => {
    const [status, setStatus] = useState('Turned off')
    function StatusChange(){
        if(status === 'Turned off') {
            setStatus('Turned on');
        } else{
            setStatus('Turned off');
        }

    }
    return (
        <>
        <div className={box}>
            <div className={boxed}>
                <p>{status}</p>
            </div>
            <button className={button} onClick={StatusChange}>Click me</button>
        </div>
        <hr></hr>
        </>
    );
}
