import Counter from './Counter'
//两个测试用例都用了同一个类的实例，可以用jest钩子函数
//beforeAll() 会在所有调用的测试用例执行之前执行
//afterAll() 等待所有的测试用例执行完后执行
//beforeEach() 在每个测试用例执行前执行
//afterEach() 在每个测试用例执行完后执行

//describe 分组

describe('Counter 测试所有相关代码',()=>{
    let counter = null;

    beforeAll(()=>{
        console.log('beforeAll')
        // counter = new Counter();
    })
    beforeEach(()=>{
        console.log('beforeEach')
        counter = new Counter();
    })
    afterEach(()=>{
        console.log('afterEach')
    })
    afterAll(()=>{
        console.log('afterAll')
    })
    describe('测试增加相关的代码',()=>{

        beforeEach(()=>{
            console.log('beforeEach test add')
            counter = new Counter();
        })

        test('测试 Counter 中的 addOne 方法',()=>{
            console.log('测试 Counter 中的 addOne 方法')
            counter.addOne();
            expect(counter.number).toBe(1)
        })
        test('测试 Counter 中的 addTwo 方法',()=>{
            console.log('测试 Counter 中的 addTwo 方法')
            counter.addTwo();
            expect(counter.number).toBe(2)
        })
    })


    describe('测试减少相关的代码',()=>{
        test('测试 Counter 中的 minusOne 方法',()=>{
            console.log('测试 Counter 中的 minusOne 方法')
            counter.minusOne();
            expect(counter.number).toBe(-1)
        })
        test('测试 Counter 中的 minusTwo 方法',()=>{
            console.log('测试 Counter 中的 minusTwo 方法')
            counter.minusTwo();
            expect(counter.number).toBe(-2)
        })
    })
})





