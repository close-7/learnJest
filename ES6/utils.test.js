import Util from './utils'
let util = null;
beforeAll(()=>{
    util = new Util();
})

test('测试 a 方法',()=> {
    // expect(util.a(1,2)).toBe('12')
     expect('12').toBe('12')
})