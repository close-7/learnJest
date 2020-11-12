# vue TDD

### NPM 配置启动命令
`"test:unit": "vue-cli-service test:unit --watch"`
开启jest的watch模式  

### jest.config.js 配置文件解析  
根据node_modules找到@vue/cli-plugin-unit-jest/presets/default/jset-preset.js,找到jset-preset.js问
+ moduleFileExtensions找那些文件后缀
+ transform 处理文件转化，如果es6->es5等等
+ transformIgnorePatterns 指定那些文件不需要转化
+ moduleNameMapper 处理语法符号简写，识别如@这类符号指定的地址  
+ snapshotSerializers 处理快照的存储，格式化  
+ testMatch  指定测试文件目录
+ testURL 测试环境下模拟的浏览器地址
+ watchPlugins 插件，方便命令行交互式选择等等功能


### vue/test-utils 的配置和使用
+ '**/tests/unit/**/*.(spec|test).[jt]s?(x)'-->使a.test.js可以被识别 
+ testPathIgnorePatterns:['\.xxxx\.js']--->jest忽略某文件


### CodeCoverage 代码覆盖率
"collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"]


### TDD 测试驱动开发模式
+ TDD是一种模式
    1. 代码质量提高
+ 单元测试
    1. 测试覆盖率高
    2. 业务耦合度高（特别是数据）
    3. 代码量大
    4. 过于独立（保证单元ok，但不保证整体ok）
    5. 适合测试方法库

## BDD 行为驱动开发模式
+ TDD 
    1. 先写测试再写代码
    2. 一般结合单元测试使用，是白盒测试
    3. 测试重点在代码
    5. 安全感低
    6. 速度快
+ BDD
    1. 先写代码再测试
    2. 一般结合集成测试，是黑盒测试
    3. 测试重点在ui (dom)
    4. 安全感高
    5. 速度慢