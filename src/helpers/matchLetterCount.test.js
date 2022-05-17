import matchLetterCount from './matchLetterCount'
describe('test helper function',()=>{
        let guessedWord;
        const secretWord="party";
        let length;
    test('check right value is returned when there is no matching letter',()=>{
        guessedWord='bones';
        length=matchLetterCount(secretWord,guessedWord);
        expect(length).toBe(0)
    })
    test('check right value is returned when there is matching letter',()=>{
        guessedWord="train"
        length=matchLetterCount(secretWord,guessedWord)
        expect(length).toBe(3)
    })
    test('check right value is returned when there is duplicate in guessed word',()=>{
        guessedWord="baaaark";
        length=matchLetterCount(secretWord,guessedWord)
        expect(length).toBe(2)
    })
})