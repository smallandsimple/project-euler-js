function largestPrimeFactor(number) {
  let n = number
  let f = 2

  while (n > 1) {
    if (n % f) {
      f++
      continue
    }
    n = n / f
  }
  return f
}

console.log(largestPrimeFactor(600851475143))