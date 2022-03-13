function multiplesOf3and5(n) {
  const nums = []
  for (let i = 3; i <  n; i++) {
    if (!(i % 3) || !(i % 5)) {
      nums.push(i)
    }
  }
  return nums.reduce((a, b) => a + b)
}

multiplesOf3and5(1000);