import { shallowMount, mount } from '@vue/test-utils'
import TodoList from '../../src/pages/TodoList/TodoList.vue'
import Header from '@/components/Header.vue'
import UndoList from '@/components/UndoList.vue'
import { findTestWrapper } from '@/utils/testUtils'

describe('TodoList', () => {
  it('组件渲染正常',()=> {
    const wrapper = shallowMount(TodoList)
  })

  it('TodoList 初始化时 undoList 应该为空',()=> {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([])
  })

  it('TodoList 监听到Header 的 add事件的时候 会增加一个内容',()=> {
    const wrapper = shallowMount(TodoList)
    const header = wrapper.findComponent(Header)
    // wrapper.vm.addUndoItem('qiu feng');
    header.vm.$emit('add','qiu feng')
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([ {status:'div',value:'qiu feng'},])
  })

  it('TodoList 中 addUndoItem 被执行后，内容会加一项',()=> {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
        undoList:[
            {status:'div',value:1},
            {status:'div',value:2},
            {status:'div',value:3}
        ]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([
        {status:'div',value:1},
        {status:'div',value:2},
        {status:'div',value:3},
        {status:'div',value:4}
    ])
  })

  it('TodoList 调用 UndoList 应该传递 list 参数',()=> {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.findComponent(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('TodoList 中handleItemDelete调用  UndoList列表内容会减少一个',()=> {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
        undoList:[
            {status:'div',value:1},
            {status:'div',value:2},
            {status:'div',value:3}
        ]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([
        {status:'div',value:1},
        {status:'div',value:3}
    ])
  })

  it('TodoList 中changeStatus调用  UndoList列表内容变化',()=> {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
        undoList:[
            {status:'div',value:1},
            {status:'div',value:2},
            {status:'div',value:3}
        ]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
        {status:'div',value:1},
        {status:'input',value:2},
        {status:'div',value:3}
    ])
  })

  it('TodoList 中resetStatus调用  UndoList列表内容变化',()=> {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
        undoList:[
            {status:'div',value:1},
            {status:'input',value:2},
            {status:'div',value:3}
        ]
    })
    wrapper.vm.resetStatus()
    expect(wrapper.vm.$data.undoList).toEqual([
        {status:'div',value:1},
        {status:'div',value:2},
        {status:'div',value:3}
    ])
  })

  it('TodoList 中changeItemValue调用  UndoList列表内容变化',()=> {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
        undoList:[
            {status:'div',value:1},
            {status:'input',value:2},
            {status:'div',value:3}
        ]
    })
    wrapper.vm.changeItemValue({
        index:1,
        value:'444'
    })
    expect(wrapper.vm.$data.undoList).toEqual([
        {status:'div',value:1},
        {status:'input',value:"444"},
        {status:'div',value:3}
    ])
  })
  

})


