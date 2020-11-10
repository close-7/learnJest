jest.mock('./utils.js');
// const Util = jest.fn();
// Util.a = jest.fn();
// Util.b = jest.fn();
import Util from './utils'
//jest.mock 发现 util 是一个类,会自动把类的构造函数和方法变成 jest.fn()
import demoFunction from './demo'


test('测试 demoFunction',()=>{
    demoFunction();
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
    console.log(Util.mock)
})