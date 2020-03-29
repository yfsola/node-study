const path = require('path')
module.exports = class TestNow{
  constructor() {
    this.fs = require('fs')
  }

  //生成测试代码
  getTestSource(methodName,classFile,isClass=false) {
    return `
test('${'TEST ' + methodName}',() => {
  const ${isClass?'{'+methodName+'}': methodName} = require('${'../'+classFile}')
  const ret = ${methodName}()
})
    `
  }

  // 测试生成文件名
  getTestFileName(filename) {
    const dirname = path.dirname(filename)
    const basename = path.basename(filename)
    const extname = path.extname(filename)
    const testname = basename.replace(extname,`.spec${extname}`)

    return path.format({
      root: dirname + '/__test__/',
      base: testname
    })
  }
}

