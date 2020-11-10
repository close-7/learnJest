import { runCallback, createObject,getDate } from './demo'
import axios from 'axios';
jest.mock('axios');

// 1.捕获函数的调用和返回结果，以及this和调用顺序
// 2.它可以让我们自由的设置返回结果
// 3.改变函数的内部实现

// test('测试 runCallback',()=>{
    //    const func = jest.fn(()=>{
    //        return '456'
    //    })  //用jest生成mock函数-->帮助我们捕获函数的调用--->以及设置返回内容
//     runCallback(func)
//     expect(func).toBeCalled();
//     // console.log(func.mock);
//     //  { calls: [ [] ],   //返回内容展示calls调用情况，以及传递的参数
//     //  instances: [ undefined ],      
//     //  invocationCallOrder: [ 1 ],//被调用的顺序
//     //  results: [ { type: 'return', value: undefined } ] } //函数执行的返回值
// })

// test('测试 runCallback',()=>{
//     const func = jest.fn()  //用jest生成mock函数-->帮助我们捕获函数的调用
//     // func.mockReturnValueOnce('Dell')
//     // func.mockReturnValue('dell') 
//     runCallback(func)
//     runCallback(func)
//     expect(func.mock.calls.length).toBe(2); //判断调用了多少次
//     console.log(func.mock);
//     //   calls: [ [], [] ]   //返回内容展示calls调用情况，以及传递的参数
    
// })

// test.only('测试 createObject',() => {
//     const func = jest.fn();
//     createObject(func);
//     console.log(func.mock);
// })

// test.only('测试 getDate', async () => {
//     //mock 第三个用处是改变函数的内部实现
//     // axios.get.mockResolvedValue({data:'hello'})
//     axios.get.mockResolvedValueOnce({data:'hello'})
//     await getDate().then((data)=>{
//         expect(data).toBe('hello')
//     })
// })


test('测试 runCallback',()=>{
    const func = jest.fn()  //用jest生成mock函数-->帮助我们捕获函数的调用
    // func.mockReturnValueOnce('Dell')
    // func.mockReturnValue('dell') 
    func.mockImplementationOnce(()=>{
    // func.mockImplementation(()=>{
        console.log('121212');
        return 'dell'
    })
    runCallback(func)
    runCallback(func)
    expect(func.mock.calls.length).toBe(2); //判断调用了多少次
    console.log(func.mock);
    //   calls: [ [], [] ]   //返回内容展示calls调用情况，以及传递的参数
    
})