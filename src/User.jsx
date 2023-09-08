import { useEffect, useState } from "react"
import Friend from "./Friend";
import './style.css'

export default function User(){
const [use,setUse]=useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUse(data))
},[])

    return (
        <div className="box">
            <h2>user: {use.length}</h2>
            {
                use.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}




/**
 * 1. Declare state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. Display data on the component
 */