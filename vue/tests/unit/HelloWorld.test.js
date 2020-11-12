// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
// // import Vue from 'vue'

// // describe('HelloWorld.vue', () => {
// //   it('renders props.msg when passed', () => {
// //     //粗暴方式，结合vue实例测试
// //     const root = document.createElement('div')
// //     root.className = 'root'
// //     document.body.appendChild(root)
// //     new Vue({
// //       render: h => h(HelloWorld,{
// //         props:{
// //           msg:'qiufeng'
// //         }
// //       })
// //     }).$mount('.root');
// //     expect(document.getElementsByClassName('hello').length).toBe(1);
// //   })
// // })

// //shallowMount浅渲染，只渲染当下层级组件，不涉及引用的组件
// //方便单元测试
// //mount深渲染，组件及子组件都会渲染
// //方便集成测试，组件与子组件通信关联的时候

// //wrapper方法  find   findAll(通过元素属性找到元素)
// //具体参考vue-test-utils
// describe('HelloWorld.vue', () => {
//   // it('测试 msg 是否被传递',() => {
//   //   const msg = 'new message'
//   //   const wrapper = shallowMount(HelloWorld, {
//   //     propsData: { msg }
//   //   })
//   //   expect(wrapper.props('msg')).toEqual(msg);
//   //   expect(wrapper.text()).toMatch(msg);
//   //   wrapper.setProps({msg:'hello'});
//   //   expect(wrapper.props('msg')).toEqual('hello')
//   // })

//   //使用快照--ui测试中很有用捕获ui变化
//   it('组件渲染正常',()=> {
//     const wrapper = shallowMount(HelloWorld,{
//       propsData: {msg:'qiu feng'}
//     })
//     expect(wrapper).toMatchSnapshot()
//   })
// })


