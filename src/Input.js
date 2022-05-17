import React from 'react'

let Input= ({success,secretWord})=>{
    let [currentGuessWord, setCurrentGuessWord]= React.useState('')
    if(success){
        return (
            <div data-test='component-input'></div>
        )
    }
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
        <button id='submit' data-test="submit" onClick={(event)=>{event.preventDefault();
        setCurrentGuessWord("")}}>Submit</button>
        </form>
    )
}
export default Input