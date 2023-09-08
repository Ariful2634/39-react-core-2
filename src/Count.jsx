import { useState } from "react"

export default function Count() {
    const [val,setValue]=useState(0)    /*setValue holo function, er kaj holo val er man change kora*/
    const style ={
        border:'1px solid yellow',
        padding: '10px',
        borderRadius:'5px'

    }
    function addClick(){
        const change = val+1;
        setValue(change)
    }
    function reduceClick(){
        const change = val-1;
        setValue(change)
    }

    return (
        <div style={style}>
            <h3>Counter: {val}</h3>
            <button onClick={addClick}>Add</button>
            <button onClick={reduceClick}>Reduce</button>
        </div>

    )


}