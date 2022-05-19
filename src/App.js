import React,{useEffect} from 'react'
import {getSecretWord} from './action/index'
import Congrats from './congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'
const App=()=>{
    let success=false;
    let guessedWords=[];
    let secretWord="party"
    useEffect(()=>{
        getSecretWord()
    },[])
    return (<div className='container joto-container' data-test="joto-container">
            <h1>Joto App</h1>
            <Input success={success} secretWord={secretWord}/>
            <Congrats success={success}/>
            <GuessedWords guessedWords={guessedWords}/>
        </div>)
}
export default App