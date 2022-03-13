function specialPythagoreanTriplet(n) {
  
  let a = 2

  while (a <= Math.ceil(Math.sqrt(n))) {
    const b = ((a * a) - 1) / 2
    const c = Math.sqrt((a * a) + (b * b))

    const sum = a + b + c
    const baseProduct = a * b * c

    if (n % sum === 0) {
      const multiple = n / sum
      const finalProduct = baseProduct * (multiple ** 3)
      if (!(finalProduct % 1)) return finalProduct
    }

    a += 1
  }
  // If there is no matching triplet
  return null
}

console.log(specialPythagoreanTriplet(1000))