function largeSum(arr) {
  const sum = arr.reduce((a, b) => +a + +b + '').substr(0,11).split('.').join('')
  return +sum
}

function largeSum(arr) {
  const sum = arr.reduce((a, b) => +a + +b).toString().substr(0,11).split('.').join('')
  return +sum
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
]

console.log(largeSum(testNums))