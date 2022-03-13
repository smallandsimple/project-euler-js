function longestCollatzSequence(limit) {
  let ans = 1
  let len = 0

  for (let i = 1; i < limit; i++) {
  
    let num = i
    let curLen = 1
    
    while (num !== 1) {
      num = num & 1 ? (3 * num) + 1 : num / 2
      curLen++
    }

    if (curLen > len) {
    	len = curLen
        ans = i
    }
  }
  
  return ans
}