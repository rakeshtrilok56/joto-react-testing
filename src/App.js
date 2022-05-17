import React from 'react'
import Congrats from './congrats'
import GuessedWords from './GuessedWords'
const App=()=>{
    return (<div className='container joto-container'>
            <h1>Joto App</h1>
            <Congrats success={true}/>
            <GuessedWords guessedWords={[{guessedWord:'train',matchLetterCount:3}]}/>
        </div>)
}
export default App