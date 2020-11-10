import { fetchDate } from './fetchDate'

//回调类型异步测试
// test('fetchDate 返回结果为 { success：true}',(done)=>{
//     fetchDate((data)=>{
//         expect(data).toEqual({
//             success:true
//         })

//         done();
//     })
// })


//处理返回的promise 方法一
// test('fetchDate 返回结果为 { success：true}',()=>{
//     return fetchDate().then((response)=>{
//         expect(response.data).toEqual({
//             success:true 
//         })
//     })
// })

//处理返回的promise 错误 方法一
// test('fetchDate 返回结果为 404',()=>{
//     expect.assertions(1);//expect要执行一次
//     return fetchDate().catch((e)=>{
//         console.log(e.toString())
//         expect(e.toString().indexOf('404')>-1).toBe(true)
//     })
// })

// 处理返回的promise 方法二 
// test('fetchDate 返回结果为 { success:true}',()=>{
//     return expect(fetchDate()).resolves.toMatchObject({
//         data:{
//             success:true
//         }
//     })
// })

//处理返回的promise 错误 方法二
// test('fetchDate 返回结果为 404',()=>{
//     return expect(fetchDate()).rejects.toThrow();
// })

// 处理返回的promise 方法三 
// test('fetchDate 返回结果为 { success:true}', async ()=>{
//     await expect(fetchDate()).resolves.toMatchObject({
//         data:{
//             success:true
//         }
//     })
// })

//处理返回的promise 错误 方法三
// test('fetchDate 返回结果为 404', async ()=>{
//     await expect(fetchDate()).rejects.toThrow();
// })


// 处理返回的promise 方法四
// test('fetchDate 返回结果为 { success:true}', async ()=>{
//     const response = await fetchDate();
//     expect(response.data).toEqual({
//         success:true
//     })
// })
//处理返回的promise 错误 方法四
// test('fetchDate 返回结果为 404', async ()=>{
//     expect.assertions(1);//expect要执行一次
//     try{
//         await fetchDate();
//     }catch(e){
//         // console.log(e.toString())
//         expect(e.toString()).toEqual('Error: Request failed with status code 404')

//     }
// })