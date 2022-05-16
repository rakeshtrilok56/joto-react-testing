import React from 'react'
import './setupTests'
import {shallow} from 'enzyme'
import GuessedWords from './GuessedWords'
import {findByTestAttr} from './test/testutils'
let defaultProps={guessedWords:[{guessedWord:'track',matchingLetterLength:2}]}
const setup=(props={})=>{
    let setUpProps={...defaultProps,...props}
    return shallow(<GuessedWords {...setUpProps}/>)
}
test('test whether the componenet is rendered with right props',()=>{
let wrapper=setup()
const component= findByTestAttr(wrapper,'component-guessed-words')
expect(component.length).toBe(1)
})
describe('testing when the length of guessed words is zero',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setup({guessedWords:[]})
    })
    test('test whether the component is rendered',()=>{
        let component=findByTestAttr(wrapper,'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test('test whether the guess information message is rendered',()=>{
        let message= findByTestAttr(wrapper,'guess-information')
        expect(message.text().length).not.toBe(0)
    })
})
describe('testing when the length of guessed words is greater than zero',()=>{
let wrapper;
let testProps={guessedWords:[{
    guessedWord: 'rain',
    matchingLetterLength:2
}]}
beforeEach(()=>{
    wrapper=setup(testProps)
})
test('testing whether the component is rendered',()=>{
    let component= findByTestAttr(wrapper,'component-guessed-words')
    expect(component.length).toBe(1)
})
test('testing whether the guessed words are rendered',()=>{
        let guessedWords= findByTestAttr(wrapper,'guessed-word')
        expect(guessedWords.length).toBe(testProps.guessedWords.length)
})
})