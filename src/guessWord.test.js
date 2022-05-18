import './setupTests'
import {mount} from 'enzyme'
import {findByTestAttr} from './test/testutils'
import React from 'react'
import App from './App'

const setup=(state={})=>{
    //TODO: to setup the shared state
    let wrapper= mount(<App />)
    let inputBox= findByTestAttr(wrapper,'input-box')
    let mockEvent={target:{value:'train'}}
    inputBox.simulate('change',mockEvent)
    let submitBtn= findByTestAttr(wrapper,'submit')
    submitBtn.simulate('click',{preventDefault(){}})
    return wrapper
}
describe('render',()=>{
let wrapper;
    test('No Words guessed',()=>{
        wrapper= setup({
            success: false,
            guessedWords:[],
            secretWord: 'party'
        })
        let appComponent= findByTestAttr(wrapper,'joto-container');
        expect(appComponent.length).toBe(1)
        let guessedWords= findBytestAttr(wrapper,'guessed-word')
        expect(guessedWords.length).toBe(1)
    })
    describe('some words guessed',()=>{
        beforeEach(()=>{
        wrapper= setup({
            success: false,
            guessedWords:[{guessedWord:'agile',matchLetterCount:1}],
            secretWord: 'party'
        })
    })
    test('check whether the guessed words are reflected in the table',()=>{
        let guessedWords= findBytestAttr(wrapper,'guessed-word')
        expect(guessedWords.length).toBe(2)
    })
        
    })
    describe('guess secret word',()=>{
        beforeEach(()=>{    
        wrapper= setup({
            success: false,
            guessedWords:[],
            secretWord: 'party'
        })
            })
        test('secret word guessed',()=>{
            let inputBox= findByTestAttr(wrapper,'input-box')
            inputBox.simulate('change',{target:{value:"party"}})
            let submitBtn= findByTestAttr(wrapper,'submit')
            submitBtn.simulate('click',{preventDefault(){}})
            let congratsMsg= findByTestAttr(wrapper,'component-congrats')
            expect(congratsMsg.text().length).toBeGreaterThan(0)
        })

    })
})