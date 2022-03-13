const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
const places = ['thousand','million','billion','trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion']

function hundredsToText(n, useAnd = true) {
    // [hundreds, tens, ones]
    const [h, t, o] = [...`${n}`.padStart(3, 0)].map(n => +n)
    let numText = []
    // If the hundreds place value is > 0
    if (h) numText.push(digits[h - 1], 'hundred')
    // If the hundreds place value is > 0 and either of the tens or ones place values are > 0, and useAnd is true
    if (h && (t || o) && useAnd) numText.push('and')
    // If the tens place value is === 1, we have a tens and ones place combined value of less than 20, so we will look it up
    if (t === 1) numText.push(digits[+`${t}${o}` - 1])
    // If the tens place value is > 1
    // If the ones place value is > 0, we need a hyphen and the ones place value
    if (t > 1) numText.push(tens[t - 2] + (o ? '-' + digits[o - 1] : ''))
    // If the tens place value is 0 and the ones place value is > 0
    if (!t && o) numText.push(digits[o - 1])
    return numText.join(' ')
}

function numToHundredGroups(n) {
    return n.toLocaleString('en').split(',').filter(n => n).map(n => +n)
}

function checkSafeVal(n) {
    if (n > Number.MAX_SAFE_INTEGER && !['string', 'bigint'].includes(typeof n)){
        throw new Error('Numbers larger than 9007199254740991 must be passed in as a string or bigint')
    }
}

function numToWords(n, useAnd) {
    if (!n) return 'zero'
    checkSafeVal(n)
    const isNeg = n < 0
    const abs = isNeg ? -n : n
    return (isNeg ? 'negative ' : '') + numToHundredGroups(abs).reverse().map((n, i) => {
        if (i) return hundredsToText(n, useAnd) + ' ' + places[i - 1]
        return hundredsToText(n, useAnd)
    }).reverse().join(' ')
}

function numberLetterCount(n, useAnd) {
    return numToWords(n, useAnd).replace(/[\s-]/g, '').length
}

function numberLetterCounts(n, useAnd) {
    checkSafeVal(n)
    // Ignore negative
    const abs = n < 0 ? -n : n
    let result = 0n
    for (let i = 0n; ++i <= abs;) {
        result += BigInt(numberLetterCount(i, useAnd))
    }
    return result
}

console.log(numberLetterCounts(150)) //  1903n
console.log(numberLetterCounts(-150)) // 1903n
console.log(numToWords(150)) //  1903n
console.log(numToWords(-150)) // 1903n