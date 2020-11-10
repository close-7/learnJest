//测试用例

// test('测试1',()=>{
//     // toBe 就是一个匹配器 matchers 相当于 object.is ===
//     expect(10).toBe(10)   //期待10，去匹配10
// })

// test('测试2',()=>{
//     // toBe 相当于 object.is ===
//     const a = {one : 1}
//     expect(a).toBe({one:1})   //报错，引用地址不同
// })

// test('测试toEqual',()=>{
//     // toEqual 作为匹配器 只匹配内容是否相等  相当于 ==
//     const a = {one : 1}
//     expect(a).toEqual({one:1})   
// })

// test('测试toBeNull',()=>{
//     // toBeNull 作为匹配器 将期待值与null比较  判断是否为空
//     const a = null;  //如果a = undefined则报错
//     expect(a).toBeNull()   
// })


//真假有关的匹配器


// test('测试toBeUndefined',()=>{
//     // toBeUndefined 作为匹配器 
//     const a = undefined;  
//     expect(a).toBeUndefined()   
// })

// test('测试toBeDefined',()=>{
//     // toBeDefined 作为匹配器 期望值被定义过
//     const a = undefined;  
//     expect(a).toBeDefined()   
// })

// test('测试toBeTruthy',()=>{
//     // toBeTruthy 作为匹配器 判断期望值是否为真  Boolean判断
//     const a = 1;  //true通过，false报错
//     expect(a).toBeTruthy()   
// })

// test('测试toBeFalsy',()=>{
//     // toBeFalsy 作为匹配器 判断期望值是否为假  Boolean判断
//     const a = 0;  //false通过，true报错
//     expect(a).toBeFalsy()    
// })

// test('测试 not 匹配器',()=>{
//     // not 判断不是 即通过
//     const a = 1;  
//     expect(a).not.toBeFalsy()   //toBeFalsy(假则通过）->not.toBeFalsy（取假的反）
// })


//数字有关的匹配器


// test('测试toBeGreaterThan',()=>{
//     // toGreaterThan 作为匹配器 判断期望值是否比设定值大
//     const count = 10;  //大则通过，小则报错
//     expect(count).toBeGreaterThan(9)   
// })

// test('测试toBeLessThan',()=>{
//     // toBeLessThan 作为匹配器 判断期望值是否比设定值小
//     const count = 10;  //小则通过，大则报错
//     expect(count).toBeLessThan(11)   
// })

// test('测试toBeGreaterThanOrEqual',()=>{
//     // toBeGreaterThanOrEqual 作为匹配器 判断期望值是否比设定值大于等于
//     const count = 10;  //大则通过，小则报错
//     expect(count).toBeGreaterThanOrEqual(11)   
// })

// test('测试toBeLessThanOrEqual',()=>{
//     // toBeLessThanOrEqual 作为匹配器 判断期望值是否比设定值小于等于
//     const count = 10;  //小则通过，大则报错
//     expect(count).toBeLessThanOrEqual(11)   
// })

// test('测试toBeCloseTo',()=>{
//     // toBeCloseTo 作为匹配器 用于浮点数运算比较
//     const firstNumber = 0.1;
//     const secondNumber = 0.2;
//     // expect(firstNumber+secondNumber).toEqual(0.3) //浮点数问题导致会出错
//     expect(firstNumber+secondNumber).toBeCloseTo(0.3)
// })


//String相关匹配器
test('测试toMatch',()=>{
    // toMatch 作为匹配器 判断期望值是包含字符
    const str = 'http://www.qiufeng.com';  //小则通过，大则报错
    expect(str).toMatch('qiufeng')  
    expect(str).toMatch(/qiufeng/)    //toMatch匹配器的目标值可以用字符串，也可以用正则
})



//Array，Set相关匹配器
test('测试toContain',()=>{
    // toContain 作为匹配器 判断期望值是否包含设定值
    const arr = ['qiu','feng','12'];  
    expect(arr).toContain('qiu')   
})


//处理异常相关匹配器
const throwErrorF = ()=>{
    throw new Error('this is a new error')
}
test('测试toThrow',()=>{
    // toThrow 作为匹配器 判断期望值是否抛出异常，抛出则通过
    // expect(throwErrorF).toThrow()   
     //判断期望值是否抛出异常,且错误提示是否一致
    expect(throwErrorF).toThrow('this is a new error') 
})