const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
const places = ['thousand','million','billion','trillion']

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
    const nStr = `${n}`
    const mod = nStr.length % 3
    return [nStr.substring(0, mod), ...nStr.substring(mod).split(/(\d{3})/)].filter(n => n).map(n => +n)
}

function numToText(n, useAnd) {
    return numToHundredGroups(n).reverse().map((n, i) => {
        if (i) return hundredsToText(n, useAnd) + ' ' + places[i - 1]
        return hundredsToText(n, useAnd)
    }).reverse().join(' ')
}

function numberLetterCounts(n, useAnd) {
    return [...Array(n)].reduce((prev, curr, i) => {
        return prev + numToText(i + 1, useAnd).replace(/[\s-]/g, '').length
    }, 0)
}

console.log(numberLetterCounts(1000))