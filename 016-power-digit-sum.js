function powerDigitSum(exp) {
  return BigInt(Number(2 ** exp)).toString().split('').reduce((a, b) => +a + +b)
}

console.log(powerDigitSum(128))