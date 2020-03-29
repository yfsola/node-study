const fs = require('fs')
function get(key) {
  fs.readFile('./db.json',(err,data) => {
    const json = JSON.parse(data)
    console.log(json[key])
  })
}

function set(key,value) {
  fs.readFile('./db.json',(err,data) => {
    const json = data?JSON.stringify(data):{}
    json[key] = value
    console.log(json,JSON.stringify(json))
    fs.writeFile('./db.json',JSON.stringify(json),err => {
      if(err) {
        console.log(err)
      }
      console.log('写入成功')
    })
  })
  
}

//命令行接口
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line',function(input){
  const [op,key,val] = input.split(' ')
  if(op === 'get') {
    get(key)
  } else if(op === 'set'){
    set(key,val)
  } else if(op === 'quit') {
    rl.close()
  } else {
    console.log('没有该操作')
  }
})
rl.on('close',function() {
  process.exit(0)
})