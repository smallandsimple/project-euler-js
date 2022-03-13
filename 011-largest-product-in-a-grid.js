// Fiddle: https://jsfiddle.net/0au2noyd/

function largestGridProduct(arr) {
  const rows = arr.length
  const cols = arr[0].length
  const products = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      // →→→→ As long as there are 4 remaining columns including the one we are on right now
      if (c < cols - 4) products.push(arr[r][c] * arr[r][c + 1] * arr[r][c + 2] * arr[r][c + 3])

      // As long as there are 4 remaining rows including the one we are on right now
      if (r <= rows - 4) {

        // ↓↓↓↓
        products.push(arr[r][c] * arr[r + 1][c] * arr[r + 2][c] * arr[r + 3][c])
       
        // ↘↘↘↘
        if (c < cols - 4) products.push(arr[r][c] * arr[r + 1][c + 1] * arr[r + 2][c + 2] * arr[r + 3][c + 3])
        
        // ↙↙↙↙
        if (c > 2) products.push(arr[r][c] * arr[r + 1][c - 1] * arr[r + 2][c - 2] * arr[r + 3][c - 3])

      }
			
    }
  }
  
  return Math.max(...products)
}

// Only change code above this line
const grid = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
]

const testGrid = [
  [40, 17, 81, 18, 57],
  [74, 4, 36, 16, 29],
  [36, 42, 69, 73, 45],
  [51, 54, 69, 16, 92],
  [7, 97, 57, 32, 16]
]

console.log(largestGridProduct(testGrid))

// If you want to log each found option

function largestGridProduct(arr) {
  let rows = arr.length
  let cols = arr[0].length

  let product = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r <= rows - 4) {

        // ↓↓↓↓
        console.log('↓', arr[r][c], arr[r + 1][c], arr[r + 2][c], arr[r + 3][c])
        const pDown = arr[r][c] * arr[r + 1][c] * arr[r + 2][c] * arr[r + 3][c]
        product = pDown > product ? pDown : product
       
        if (c < cols - 4) {
          // ↘↘↘↘
          console.log('↘', arr[r][c], arr[r + 1][c + 1], arr[r + 2][c + 2], arr[r + 3][c + 3])
          const pDiag = arr[r][c] * arr[r + 1][c + 1] * arr[r + 2][c + 2] * arr[r + 3][c + 3]
          product = pDiag > product ? pDiag : product
        }
        
        if (c > 2) {
          // ↙↙↙↙
          console.log('↙', arr[r][c], arr[r + 1][c - 1], arr[r + 2][c - 2], arr[r + 3][c - 3])
          const pDiag = arr[r][c] * arr[r + 1][c - 1] * arr[r + 2][c - 2] * arr[r + 3][c - 3]
          product = pDiag > product ? pDiag : product
        }

      }
			
      if (c < cols - 4) {
        // →→→→
        console.log('→', arr[r][c], arr[r][c + 1], arr[r][c + 2], arr[r][c + 3])
        const pRight = arr[r][c] * arr[r][c + 1] * arr[r][c + 2] * arr[r][c + 3]
        product = pRight > product ? pRight : product
      }
    }
  }
  
  return product
}

// Refactored to minimize

function largestGridProduct(arr) {
  const rows = arr.length
  const cols = arr[0].length
  const products = []

  const pushGridProduct = (r, c, rI = 0, cI = 0) => {
    try {
      products.push(
        arr[r][c] *
        arr[r + rI][c + cI] *
        arr[r + (rI * 2)][c + (cI * 2)] *
        arr[r + (rI * 3)][c + (cI * 3)]
        || 0
      )
    } catch {}
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      pushGridProduct(r, c, 0, 1) // →
      pushGridProduct(r, c, 1, 0) // ↓
      pushGridProduct(r, c, 1, 1) // ↘
      pushGridProduct(r, c, 1, -1) // ↙		
    }
  }

  return Math.max(...products)
}

// Refactored again to make customizable to distance to multiply

function largestGridProduct(arr, dist = 4) {
  const rows = arr.length
  const cols = arr[0].length
  const incSets = [[0, 1], [1, 0], [1, 1], [1, -1]] // → , ↓ , ↘ , ↙
  const products = []

  const pushGridProduct = (r, c, rInc = 0, cInc = 0) => {
    try {
      let val = arr[r][c]
      let incDist = dist - 1
      while (incDist > 0) {
        const rDist = rInc * incDist
        const cDist = cInc * incDist
        val *= arr[r + rDist][c + cDist]
        incDist--
      }
      products.push( val || 0 )
    } catch {} // Catch and ignore errors from multiplying nonexistent cells.  Not the most efficient but works!
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      incSets.forEach(set => pushGridProduct(r, c, set[0], set[1]))
    }
  }

  return Math.max(...products)
}

// Refactored specifically to make a more efficient version with protection
// Fiddle: https://jsfiddle.net/hcvfkobe/1/

function largestGridProduct(arr, dist = 4) {
  if (!dist || isNaN(dist) || dist > arr.length || !Array.isArray(arr) || !arr.every(a => a.every(n => n === Number(n)))) return null
  const rows = arr.length
  const cols = arr[0].length
  let product = 0

  const pushGridProduct = (r, c, rInc = 0, cInc = 0) => {
    let val = arr[r][c]
    let incDist = dist - 1
    while (incDist > 0) {
      const rDist = rInc * incDist
      const cDist = cInc * incDist
      val *= arr[r + rDist][c + cDist]
      incDist--
    }
    product = val > product ? val : product
  }

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const inForwardRowRange = r <= rows - dist
    const inForwardColRange = c < cols - dist
    const inReverseColRange = c > dist - 2

    if (inForwardColRange) pushGridProduct(r, c, 0, 1) // →
    if (inForwardRowRange) pushGridProduct(r, c, 1, 0) // ↓
    if (inForwardRowRange && inForwardColRange) pushGridProduct(r, c, 1, 1) // ↘
    if (inForwardRowRange && inReverseColRange) pushGridProduct(r, c, 1, -1) // ↙
  }
}

return product
}

// More features and grid generator!
// If there are duplicate sets, the first occurrence will always be the returned result
// Fiddle: https://jsfiddle.net/9jmse6o0/11/

function largestGridProduct (arr, dist = 4, only = null) {
	if (!dist || isNaN(dist) || dist > arr.length || !Array.isArray(arr) || !arr.every(a => a.every(n => n === Number(n)))) return null
  const rows = arr.length
  const cols = arr[0].length
  const directions = { '01': '→', '10': '↓', '11': '↘', '1-1': '↙' }
  let maxProduct = 0
  let result

  const pushGridProduct = (r, c, rInc = 0, cInc = 0) => {
    let set = [arr[r][c]]
    let incDist = dist - 1
    let product = arr[r][c]
    while (incDist > 0) {
      const rDist = rInc * incDist
      const cDist = cInc * incDist
      set.push(arr[r + rDist][c + cDist])
      product *= arr[r + rDist][c + cDist]
      incDist--
    }
   	if (product > maxProduct) {
    	maxProduct = product
    	result = {set: set, product: product, startRow: r, startColumn: c, direction: directions[`${rInc}${cInc}`]}
    }
    
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const inForwardRowRange = r <= rows - dist
      const inForwardColRange = c < cols - dist
      const inReverseColRange = c > dist - 2

      if (inForwardColRange) pushGridProduct(r, c, 0, 1) // →
      if (inForwardRowRange) pushGridProduct(r, c, 1, 0) // ↓
      if (inForwardRowRange && inForwardColRange) pushGridProduct(r, c, 1, 1) // ↘
      if (inForwardRowRange && inReverseColRange) pushGridProduct(r, c, 1, -1) // ↙
    }
  }
  
  return only ? result[only] : { ...result, distance: dist }
}

function generateGrid (size, maxInt = 99) {
	return Array(size).fill(0).map(n => Array(size).fill(0).map(n => Math.floor(Math.random() * (maxInt + 1))))
}