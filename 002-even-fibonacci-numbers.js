function fiboEvenSum(num) {
  const nums = [1, 2]
  let i = 0

  while(nums[i] + nums[i + 1] <= num) {
    nums.push(nums[i] + nums[i + 1])
    i++
  }
  
  return nums.filter(n => !(n % 2)).reduce((a, b) => a + b);
}