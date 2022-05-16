import React from 'react'
import PropTypes from 'prop-types'
const GuessedWords=(props)=>{
    let contents;
    if(props.guessedWords.length==0){
        contents=(
            <span data-test="guess-information">You made no guesses. Start making guesses!</span>
        )
    }
    else{
        contents=(
            <React.Fragment>
            <h3>Guessed Words</h3>
            <table>
                <thead>
                <tr><th>Guessed Word</th><th>Match Count</th></tr>
                </thead>
                <tbody>
                {props.guessedWords.map((obj,index)=>{
                    return (
                        <tr key={index} data-test='guessed-word'><td>{obj.guessedWord}</td><td>{obj.matchingLetterLength}</td></tr>
                    )
            })}
                </tbody>
            </table>
            </React.Fragment>
        )
    }
        return (<div data-test='component-guessed-words'>
                        {contents}
                </div>)

}
GuessedWords.propTypes={
guessedWords:PropTypes.arrayOf(PropTypes.shape({guessedWord:PropTypes.string.isRequired,
    matchingLetterLength:PropTypes.number.isRequired
})).isRequired
}
export default GuessedWords