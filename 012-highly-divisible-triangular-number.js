function divisibleTriangleNumber(n) {
  if (!n) return 1
  const divisors = new Set()
  let i = n

  while (true) {
    const t = i * (i + 1) / 2
    let j = 1

    while (j <= Math.sqrt(t)) {
      if (!(t % j)) divisors.add(j).add(t / j)
      if (divisors.size >= Math.abs(n)) return t
      j++
    }

    divisors.clear()
    i++
  }
}

console.log(divisibleTriangleNumber(5))