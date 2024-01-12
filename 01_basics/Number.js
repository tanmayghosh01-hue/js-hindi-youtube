// This is about Numbers in Javascript

const score = 4

const balance = new Number(100)

console.log(balance)
console.log(typeof balance)

const sasuke = balance.toString().length

console.log(sasuke)

console.log(balance.toExponential(2))

const otherNumber = 1234.8966

console.log(otherNumber.toPrecision(3))

const hundreds = new Number(100000)

console.log(hundreds.toLocaleString('en-IN')) 

console.log(hundreds.toString())