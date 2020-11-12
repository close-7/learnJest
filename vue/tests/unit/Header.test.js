import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import { findTestWrapper } from '@/utils/testUtils'

describe('Header.vue', () => {

  // it('Header 样式发生改变， 做提示',()=> {
  //   const wrapper = shallowMount(Header)
  //   expect(wrapper).toMatchSnapshot();
  // })

  it('Header 包含 input 框',()=> {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper,'header-input')
    expect(input.exists()).toBe(true)
  })

  it('Header 中 input 框初始内容为空',()=> {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it('Header 中 input 框发生变化，数据应该跟着变',()=> {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper,'header-input')
    input.setValue('qiu feng')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('qiu feng')
  })

  it('Header 中 input 框输入回车，无内容时，无反应',()=> {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper,'header-input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('Header 中 input 框输入回车，有内容时，向外触发事件,同时清空',()=> {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper,'header-input')
    input.setValue('QF')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})