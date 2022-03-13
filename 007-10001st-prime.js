//Most efficient 
function nthPrime(n) {
 
  let primes = [2]
  let curNum = 1
  let isPrime = true

  while (primes.length < n) {
    curNum += 2

    for (let i = 0; primes[i] <= Math.ceil(Math.sqrt(curNum)); i++) {
      if (!(curNum % primes[i])) {
        isPrime = false
        break
      }
    }

    if (isPrime) primes.push(curNum)
    isPrime = true
  }

  return !n ? null : primes[primes.length - 1]
}

console.log(nthPrime(10001))

// Incremental check

function nthPrime(n) {
  if (n < 2) return n
  
  let i = 3
  let totalPrimes = 1

  while (totalPrimes < n) {
    const p = (() => {
      for (let x = 3; x < i; x += 2) {
        if (!(i % x)) return null
      }
      return i
    })()

    if (p) totalPrimes++

    if (totalPrimes === n) {
      return i
    }

    i += 2
  }
}

const x = Date.now()
console.log(nthPrime(10001))
console.log((Date.now() - x))

// Check modulous of all previous primes

function nthPrime(n) {
  if (n < 2) return n
  
  let i = 1
  let t = [2]

  while (t.length < n) {
    i += 2

    const p = (a, x) => {
      if (x === t.length) return a
      if (!(a % t[x])) return false
      return p(a, x + 1)
    }

    const res = p(i, 0)
    if (res) {
      t.push(res)
    }
  }

  return i
}

const x = Date.now()
console.log(nthPrime(10001))
console.log((Date.now() - x))

function nthPrime(n) {
  if (n < 2) return n
  
  let i = 1
  let t = [2]

  while (t.length < n) {
    i += 2

    let x = 0
    while (x <= t.length) {
      if (!(i % t[x])) break
      x++
    }

    if (x === t.length) {
        t.push(i)
    }
  }

  return i
}

const x = Date.now()
console.log(nthPrime(10001))
console.log((Date.now() - x))