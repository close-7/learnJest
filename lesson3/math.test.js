// const math = require('./math');
// const {add,minus,multi} = math;

import {add,minus,multi} from './math'

test('测试加法 3+7',()=>{
    expect(add(3,7)).toBe(10)
})

test('测试减法 3-3',()=>{
    expect(minus(3,3)).toBe(0)
})

test('测试乘法 3*3',()=>{
    expect(multi(3,3)).toBe(9)
})

// expect(add(3,3)).toBe(6)
// expect(minus(6,3)).toBe(3)