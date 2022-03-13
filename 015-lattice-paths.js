// https://towardsdatascience.com/understanding-combinatorics-number-of-paths-on-a-grid-bddf08e28384

function latticePaths(gridSize) {
  const f = n => n > 1 ? n * f(n - 1) : 1
  return f(gridSize * 2) / f(gridSize) ** 2
}

console.log(latticePaths(20))
