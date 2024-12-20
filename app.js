
const as = require('lodash')
const arr = [1,[2,[3,[4,5]]]]
const newArr = as.flattenDeep(arr)
console.log(newArr);
