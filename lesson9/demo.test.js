import { generateConfig, generateAnotherConfig } from "./demo";

// test('测试 generateConfig 函数',()=>{
//     expect(generateConfig()).toEqual({
//         serve:'http://localhost',
//         port:8080,
//         domain:'localhost'
//     })
// })

//快照对测试配置文件/组件测试特别有用
// test('测试 generateConfig 函数',()=>{
//     //测试和快照匹配
//     //调用toMatchSnapshot()会自动生成__snapshots__文件夹
//     //并根据generateConfig()调用生成对应的快照文件(demo.test.js)-->(demo.test.js.snap)
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//         //设置快照不比较内容，只比较数据类型，可选：number，string，data
//     });
// })

// Watch Usage
//  › Press a to run all tests.
//  › Press f to run only failed tests.
//  › Press p to filter by a filename regex pattern.
//  › Press t to filter by a test name regex pattern.
//更新快照
//  › Press u to update failing snapshots.
//交互式的一个个的更新快照
//  › Press i to update failing snapshots interactively.
//  › Press q to quit watch mode.
//  › Press Enter to trigger a test run.

// test('测试 generateAnotherConfig 函数',()=>{
//     //测试和快照匹配
//     //调用toMatchSnapshot()会自动生成__snapshots__文件夹
//     //并根据generateConfig()调用生成对应的快照文件(demo.test.js)-->(demo.test.js.snap)
//     // expect(generateAnotherConfig()).toMatchSnapshot();
//     expect(generateAnotherConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     });
// })

//行内快照 toMatchInlineSnapshot()
test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "serve": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
