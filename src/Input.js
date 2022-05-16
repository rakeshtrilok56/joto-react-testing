import React,{useState} from 'react'

let Input= ({secretWord})=>{
    let [currentGuessWord, setCurrentGuessWord]= useState('')
    return (
        <form className='component-input' data-test='component-input'>
        <input 
        className='input'
        id='input-box'
        value={currentGuessWord}
        onChange={(event)=>{
            setCurrentGuessWord(event.target.value)
        }}
        data-test='input-box'
        
        >
        </input>
        <button id='submit' onClick={(event)=>event.preventDefault()}>Submit</button>
        </form>
    )
}
export default Input