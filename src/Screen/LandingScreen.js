import React, {useState} from 'react'
import {data} from '../Components/data'
import './LandingScreen.css'

const LandingScreen = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
e.preventDefault();
let amount = parseInt(count);
if(amount<0) amount=1;
if(amount>8){
    alert(' Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀')
    amount=8;
} 
setText(data.slice(0, amount));
return;
    }
  return (
    <>
    <h1>TIRED OF BORING LOREM IPSUM?</h1>
    <form className='main' onSubmit={handleSubmit}>
    <label htmlFor='input'>Paragraphs: </label>
    <input type="number" id="input" value={count} onChange={(e)=>setCount(e.target.value)}></input>
    <button type="submit" id="button">Generate</button>
    </form>

    <article>
       {text.map((data, index)=>(
        <p key={index}>{data}</p>
       ))}
    </article>
    </>
  )
}

export default LandingScreen