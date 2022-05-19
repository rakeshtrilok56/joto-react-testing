
import moxios  from 'moxios'
import {getSecretWord }from './index'
describe('test get Secret word function',()=>{
        beforeEach(()=>{
            moxios.install()
        })
        afterEach(()=>{
            moxios.uninstall()
        })
        test('test secret word action',()=>{
        moxios.wait(()=>{
        let request= moxios.requests.mostRecent()
        request.respondWith({
            status:200,
            response:'party'
        })
    })
        return getSecretWord().then((secretWord)=>{
            expect(secretWord).toBe('party')
        })
    })
})