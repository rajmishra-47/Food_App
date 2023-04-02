import React from 'react'
import { useState } from 'react'
import './style.css'
export default function Box() {

    const[text,setText] =useState("")
    const[img,setImg] =useState("")

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const a=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`).then((user)=>{
            return user.json();
        }).then((mess)=>{
            setText(mess.meals[0].strInstructions);
            setImg(mess.meals[0].strMealThumb)
        })
    }
    
    
  return (
    <div>
        
        <div className="search">
        
         <input type="text" value={inputValue} onChange={handleInputChange} id='text'/>
         <button id='click' onClick={a}>Click</button>
        
        </div>

        <div className="pannel">
        <div className="box">
  <img src={img} />
</div>

<div className="fixed-div">
  
  <p>{text}</p>

</div>
        </div>
    </div>
  )
}
