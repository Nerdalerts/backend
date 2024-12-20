const path = require('path')

console.log(path.sep)

const filePath = path.join( 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute1 = path.resolve(__dirname,  'subfolder', 'first.txt')
console.log(absolute1)
const absolute2 = path.resolve(__dirname,  'subfolder', 'second.txt')
console.log(absolute2)

module.exports = {absolute1,absolute2}
