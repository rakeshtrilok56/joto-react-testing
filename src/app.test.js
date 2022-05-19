import React from 'react'
import App from './App'
import {mount} from 'enzyme'
import {findByTestAttr} from './test/testutils'
import './setupTests'
jest.mock('./action')
import {getSecretWord as mockSecretWord} from './action/index'
const setup=(state={})=>{
    let wrapper= mount(<App />)
    return wrapper
}

describe('fetch secret word',()=>{

let wrapper;
wrapper=setup()
    test('renders without error',()=>{
        let appComponent= findByTestAttr(wrapper,'joto-container')
        expect(appComponent.length).toBe(1)
    })
    test('check whether secret word is fetched on app mount',()=>{
        expect(mockSecretWord).toBeCalledTimes(1)
    })
    test('check whether secret word is not fetched on app update',()=>{
        mockSecretWord.mockClear()
        let inputBox= findByTestAttr(wrapper,'input-box')
        inputBox.simulate('change',{target:{value:'party'}})
        let submitBtn= findByTestAttr(wrapper,'submit')
        submitBtn.simulate('click',{preventDefault(){}})
        expect(mockSecretWord).toBeCalledTimes(0)
    })
})