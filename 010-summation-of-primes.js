// My solution ******************************

const isPrime = n => {

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) return false
  }

  return !n ? false : n === 1 ? false : true
}

function primeSummation(n) {

  let sum = 2
  
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) sum += i
  }

  return !n || n === 1 ? 0 : sum
}

const time = Date.now()
console.log(primeSummation(1))
console.log(Date.now() - time)


// Sieve of Eratosthenes

function primeSummation(num) {
  // Prime number sieve
  let isPrime = Array(num).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num - 1); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j < num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}

// Sieve alternate version

function primeSummation(num) {
  // Prime number sieve
  let isPrime = Array(num - 3).fill(true)
  
  for (let i = 3; i <= Math.sqrt(num - 1); i += 2) {

    for (let j = i * i; j < num; j += i) {
      isPrime[j - 3] = false
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime && !(index % 2) ? sum + index + 3 : sum, 2
  );
}

const time = Date.now()
console.log(primeSummation(2000000))
console.log(Date.now() - time)