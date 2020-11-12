import { mount } from '@vue/test-utils'
import TodoList from '@/pages/TodoList/TodoList.vue'
import { findTestWrapper } from '@/utils/testUtils'
import store from '../../store'

describe('UndoList.vue', () => {
    it('1. 用户会在header输入框输入内容2. 用户会点击回车按钮3. 列表项应该增加用户输入内容的列表项'
        ,() => {
        const wrapper = mount(TodoList,{store});
        const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
        const content = 'qiu feng'
        inputElem.setValue(content);
        inputElem.trigger('change');
        inputElem.trigger('keyup.enter');
        const listItems = findTestWrapper(wrapper, 'list-item')
        console.log(listItems)
        expect(listItems.length).toBe(1)
        expect(listItems.at(0).text()).toBe(content)
    })

    it('异步函数',(done)=>{
        const wrapper = mount(TodoList,{store});
        wrapper.vm.$nextTick(()=>{
            const listItems = findTestWrapper(wrapper, 'list-item')
            expect(listItems.length).toBe(1)
            done()
        })
    })
})
