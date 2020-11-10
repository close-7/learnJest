import {fetchData} from './demo'

// import axios from 'axios'

//模拟axios库
// jest.mock('axios')
// test('fetchData 测试',()=>{
//     axios.get.mockResolvedValue({
//         data:"(function(){return '123'})()"
//     })

//     return fetchData().then(data => {
//         expect(eval(data)).toEqual('123')
//     })
// })

//取消模拟fetchData方法
// jest.unmock('./demo');

//模拟fetchData方法
jest.mock('./demo');
test('fetchData 测试',()=>{
    return fetchData().then(data => {
        expect(eval(data)).toEqual('123')
    })
})
//getNumber 不是模拟，而是引用真正的
const { getNumber } = jest.requireActual('./demo')

test('getNumber 测试',()=>{
    expect(getNumber()).toEqual(123)
})



