function sumSquareDifference(n) {
  // Make an array of integers 1 through n
  const arr = Array(n).fill(0).map((e, i) => i + 1)

  // Calulate the squares, then add them together
  const sumSquares = arr.map(e => e ** 2).reduce((a, b) => a + b)

  // Calculate the sum then square it
  const squareSum = arr.reduce((a, b) => a + b) ** 2

  // return the difference
  return squareSum - sumSquares
}

console.log(sumSquareDifference(10))