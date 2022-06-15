// create your App component here
import React, { useState,useEffect } from 'react';

function App(){
    const [doge,setDoge] = useState("")
    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(resp => resp.json())
        .then(data => setDoge(data.message))
    },[])

    
    if (!doge) return <p>Loading...</p>

    return (
        <img src={doge} alt="A Random Dog"/>
)}


export default App;