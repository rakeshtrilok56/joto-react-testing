/**
 * @function calculate matchLetter count between guessed word and secret word
 * @param {String,String}
 * @returns {Number}
 */
export default function(secretWord,guessedWord){
const guessedWordList= guessedWord.split('')
let guessedWordSet= new Set(guessedWordList)
let secreWordList=secretWord.split('')
return secreWordList.filter((letter)=>guessedWordSet.has(letter)).length
}