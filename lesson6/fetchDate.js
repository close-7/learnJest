import axios from 'axios'

//回调类型异步测试
// export const fetchDate = (fn)=>{
//     axios.get('http://www.dell-lee.com/react/api/demo.json').then((response)=>{
//         fn(response.data)
//     })
// }

//处理返回的promise
export const fetchDate = ()=>{
  return  axios.get('http://www.dell-lee.com/react/api/demo.json')
}