function largestPalindromeProduct(n) {
	const min = 10 ** (n - 1)
  const max = (10 ** n) - 1
  
  let palindrome = 0
  
  for (let i = max; i >= min; i--) {
  	for (let j = max; j >= i; j--) {
    	const product = i * j
      if (product > palindrome && product == [...String(product)].reverse().join('')) {
        palindrome = product
      }
    }
  }
  return palindrome
}

largestPalindromeProduct(3);