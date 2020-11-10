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

