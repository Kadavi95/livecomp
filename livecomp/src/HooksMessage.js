import React, { useState, useEffect} from 'react';
import { SimpleButton } from './SimpleButton.js';


export function HooksMessage(props) {
    const [showSpan, setShowSpan] = useState(false);
    useEffect(() => {
        console.log("wywołano fn useEffect");
        return () => console.log("useEfect-porządkowaniepw");
    }
    )

    const handleClick = (event) => {
        setShowSpan(!showSpan);
        props.callback(event);
    } 
    const getMessangeElement = () => {
        let div = <div id="messageDiv" className="h5 text-center p-2">
            {props.message}
        </div>
        return showSpan ? <span>{div}</span> : div;
    }
    return (
        <div>
            <SimpleButton theme="primary" {...props} callback={handleClick}></SimpleButton>
            {getMessangeElement()}
        </div>
    )
}


