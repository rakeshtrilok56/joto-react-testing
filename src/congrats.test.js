import React from 'react'
import {shallow} from 'enzyme'
import Congrats from './congrats'
import { findByTestAttr } from './test/testutils'
import './setupTests'
let defaultProps={success:false}
const setup=(props={})=>{
let setUpProps={...defaultProps, ...props}
return shallow(<Congrats {...setUpProps}/>)
}
test('renders without error',()=>{
    const wrapper=setup()
    const component=findByTestAttr(wrapper,'component-congrats')
    expect(component.length).toBe(1)
})

test('renders the sucess text when success prop is true',()=>{
const wrapper=setup({success:true})
const component= findByTestAttr(wrapper,'component-congrats')
expect(component.text().length).not.toBe(0)
})

test('No text is rendered when success prop is false',()=>{
    const wrapper=setup({success:false})
    const component= findByTestAttr(wrapper,'component-congrats')
    expect(component.text().length).toBe(0)
})