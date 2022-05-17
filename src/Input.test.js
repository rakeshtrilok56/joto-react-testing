import Input from "./Input";
import React from 'react'
import './setupTests'
import {findByTestAttr} from './test/testutils'
import {shallow} from 'enzyme'
let setup=(success=false,secretWord="party")=>{
    return shallow(<Input success={success} secretWord={secretWord}/>)
}
describe('state controlled input field',()=>{
    let mockSetCurrentGuessWord=jest.fn();
    let original;
    let wrapper;
    beforeEach(()=>{
            mockSetCurrentGuessWord.mockClear()
            original= React.useState;
            React.useState=(initialState)=>[initialState,mockSetCurrentGuessWord]
            wrapper=setup()
        })
    afterEach(()=>{
            React.useState=original
    })
test('check whether the component is rendered successfully ',()=>{

        let component= findByTestAttr(wrapper,'component-input')
        expect(component.length).toBe(1)
})
test('test whether state is updated when on change event is triggered',()=>{
    let mockEvent={target:{value:'train'}}
    //let mockSetCurrentGuessWord=jest.fn()
    //React.useState=jest.fn(()=>['',mockSetCurrentGuessWord])

    let inputBox= findByTestAttr(wrapper,'input-box')
    inputBox.simulate('change',mockEvent)
    expect(mockSetCurrentGuessWord).toHaveBeenCalledWith('train')
})

test('clear inut on every submit',()=>{
    let submitBtn=wrapper.find(`[data-test="submit"]`)
    expect(submitBtn.length).toBe(1)
    submitBtn.simulate('click',{preventDefault(){}})
    expect(mockSetCurrentGuessWord).toHaveBeenCalledWith("")

})
})
describe('render',()=>{

    let wrapper;

    describe('when success is true',()=>{
            beforeEach(()=>{
                wrapper=setup(true)
            })
            test('renders with out error',()=>{
                let inputComponent= findByTestAttr(wrapper,'component-input')
                expect(inputComponent.length).toBe(1)
            })
             test('input box is not shown',()=>{
                let inputBox= findByTestAttr(wrapper,'input-box')
               expect(inputBox.exists()).toBe(false)
            })
            test('submit btn is not shown',()=>{
                let submitBtn= findByTestAttr(wrapper,'submit')
                expect(submitBtn.exists()).toBe(false)
            })
    })
    describe('when success is false',()=>{
            beforeEach(()=>{
                wrapper=setup(false)
            })
            test('renders without error',()=>{
                let inputComponent= findByTestAttr(wrapper,'component-input')
                expect(inputComponent.length).toBe(1)
            })
            test('input box is  shown',()=>{
                let inputBox= findByTestAttr(wrapper,'input-box')
               expect(inputBox.exists()).toBe(true)
            })
            test('submit btn is  shown',()=>{
                let submitBtn= findByTestAttr(wrapper,'submit')
                expect(submitBtn.exists()).toBe(true)
            })
    })
})