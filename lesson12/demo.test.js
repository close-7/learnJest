import addDivToBody from './demo'
import $ from 'jquery'

test('测试 addDivToBody',()=>{
    addDivToBody();
    addDivToBody();
    expect($('body').find('div').length).toBe(2);
    console.log($('body').find('div').length)
    
})