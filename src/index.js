module.exports = function toReadable(number) {
  number = String(number)
  let h = number[number.length - 3]
  let d = number[number.length - 2]
  let u = number[number.length - 1]
  let res = ''
  let uArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let dArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  switch (number.length) {
    case 3:
      d === u && d === '0' ? res = `${uArr[h]} hundred` : res = `${uArr[h]} hundred` + (d + u < 20 ? ` ${uArr[+(d + u)]}` : ` ${dArr[d - 2]}` + (u === '0' ? '' : ` ${uArr[u]}`))
      break
    case 2:
      number < 20 ? res = uArr[number] : res = dArr[d - 2] + (u === '0' ? '' : ` ${uArr[u]}`)
      break
    case 1:
      res = uArr[u]
      break

    default:
      res = 'too big number'
      break
  }
  return res
}
