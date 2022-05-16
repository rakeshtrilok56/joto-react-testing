import Input from "./Input";
import React from 'react'
import './setupTests'
import {findByTestAttr} from './test/testutils'
import {shallow} from 'enzyme'
let mockSetCurrentGuessWord= jest.fn()
jest.mock('react',()=>({...jest.requireActual('react'),useState:(initialstate)=>[initialstate,mockSetCurrentGuessWord]}))
let setup=()=>{
    return shallow(<Input secretWord={'party'}/>)
}
test('check whether the component is rendered successfully ',()=>{
        let wrapper= setup()
        let component= findByTestAttr(wrapper,'component-input')
        expect(component.length).toBe(1)
})
test('test whether state is updated when on change event is triggered',()=>{
    let mockEvent={target:{value:'train'}}
    //let mockSetCurrentGuessWord=jest.fn()
    //React.useState=jest.fn(()=>['',mockSetCurrentGuessWord])
    let wrapper= setup()
    let inputBox= findByTestAttr(wrapper,'input-box')
    inputBox.simulate('change',mockEvent)
    expect(mockSetCurrentGuessWord).toHaveBeenCalledWith('train')
})