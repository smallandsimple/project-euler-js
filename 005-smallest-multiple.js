// Euclidian (the fastest method: calculate greatest common divisor and use to calculate least common multiple)
const gcd = (a, b) =>  b ? gcd(b, a % b) : a

const lcm = (a, b) => (a * b) / gcd(a, b)

const gcdMulti = (arr) => arr.reduce(gcd)

const lcmMulti = (arr) =>  arr.reduce(lcm)

// Make an array of integers from 1 to n
const intArr = n => Array(n + 1).fill(0).map((e, i) => i + 1)

// 44 is the highest that can give an int as a result in JavaScript
const smallestMult = (n) => lcmMulti(intArr(n))

//--------------------------------------
// Simple (can also be done with a loop)
function smallestMulti(n, s) {
  let smallest = s || n
  
  for (let i = n; i > 0; i--) {
    if (smallest % i) {
      return smallestMult(n, ++smallest)
    }
    if (i === 1) {
      return smallest
    }
  }
}