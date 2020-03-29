test('测试文件名', () => {
  const src = new (require('../index'))()
  const ret = src.getTestFileName('./abc/class.js')
  // console.log(ret)
  expect(ret).toBe('./abc/__test__/class.spec.js')
})


test('测试生成代码', () => {
  const src = new (require('../index'))()
  const ret = src.getTestSource('methodName','class.js')
  expect(ret)
      .toBe(
        `
test('TEST methodName',() => {
  const methodName = require('../class.js')
  const ret = methodName()
})
      `
  )
})