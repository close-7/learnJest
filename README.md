# learnJest
 Jest学习， TDD、BDD


### 前端自动化测试原理
参考lesson1--先预期一个结果，计算真正的结果，然后比较


## 前端自动化测试框架：Jest
Jest的优势：
1. 速度快
2. api简单  
3. 易配置  
4. 隔离性好  
5. 监控模式  
6. IDE整合  
7. Snapshot  
8. 多项目并行  
9. 覆盖率  
10. Mock丰富

## Jest 安装  
+ `npm install jest@24.8.0`  
+ 使用参考lesson2--通过module.export导出，require引入
+ 运行 `npm run test`

### 单元测试、集成测试
+ 单元测试：测试一个模块  
+ 集成测试：测试多个模块

## 暴露jest配置
`npx jest --init`  页面生成jest.config.js配置文件  
`npx jest --coverage` 生成测试覆盖率说明 以及coverage文件夹  
`"test": "jest --watchAll",` 监听所有测试文件的变化

## bable转化
将es6模块语法转化为commonjs模块规范，使jest能在node下运行 ` npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D`  
+ babel配置:.babelrc  
+ 原理：
    1. npm run jest 执行的时候
    2. jest（babel-jest)
    3. babel-core 
    4. 取 .babelrc配置
    5. 在运行测试之前，结合babel配置，先把你的代码做一次转化
    6. 运行转化过的测试用例代码


## Jest中的匹配器
lesson4  
+ toBe 就是一个匹配器 matchers 相当于 object.is ===
+ toEqual 作为匹配器 只匹配内容是否相等  相当于 ==
+ toBeNull 作为匹配器 将期待值与null比较  判断是否为空 
+ toBeUndefined 作为匹配器
+ toBeDefined 作为匹配器 期望值被定义过
+ toBeTruthy 作为匹配器 判断期望值是否为真  Boolean判断
+ toBeFalsy 作为匹配器 判断期望值是否为假  Boolean判断
+ not 判断不是 即通过
+ toMatch 作为匹配器 判断期望值是包含字符


## Jest命令行工具  

```
Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.

```
+ 按f后，jest测试不会再测试已通过的测试用例。再次按f退出这个模式  
+ 按o后，只会测试和当前被改变文件相关的测试用例
+ 按t后，根据测试用例的名称，只测试名称一致的测试用例
+ 按p后，根据文件名称，只测试该文件下的测试用例
+ 按Enter后，重新运行测试


## jest中异步代码测试
参考lesson6


## jest中钩子函数
参考lesson7
+ beforeAll() 会在所有调用的测试用例执行之前执行
+ afterAll() 等待所有的测试用例执行完后执行
+ beforeEach() 在每个测试用例执行前执行
+ afterEach() 在每个测试用例执行完后执行

### describe('',()=>{})  分组
```
Counter 测试所有相关代码
    测试增加相关的代码
      √ 测试 Counter 中的 addOne 方法 (4ms)      √ 测试 Counter 中的 addTwo 方法 (2ms)
    测试减少相关的代码
      √ 测试 Counter 中的 minusOne 方法 (3ms)
      √ 测试 Counter 中的 minusTwo 方法 (19ms)
```


## jest中钩子函数的作用域
参考lesson7
+ describe()中的钩子函数，对内部的测试用例都有效
+ describe()嵌套describe()的情况下，先执行外部的钩子，再执行内部
+ test.only() 忽略其他测试用例，只检测自己
+ 测试准备代码一定要写到钩子函数中， describe()中的方法会在钩子函数执行前最先执行


## jest中的Mock
参考lesson8


## Snapshot 快照测试
+ 行内snapshot 安装 `npm install prettier`
+ 使用 toMatchInlineSnapshot()  将快照放入测试用例


## mock 深入
+ 异步函数用mock模拟，同步函数直接测试


## mock timers
+ 模拟定时器相关操作
+ jest.useFakeTimers(); jest.runAllTimers()



