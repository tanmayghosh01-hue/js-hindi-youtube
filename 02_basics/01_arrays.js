// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "Hatim"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1])
console.log(typeof myHeros)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)

// console.log(myArr)

// myArr.shift()

// console.log(myArr.includes(9))

// console.log(myArr.indexOf(1))

// console.log(myArr)


const newArr = myArr.join()


// console.log(myArr)
// console.log(typeof newArr)

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1)
// console.log(typeof myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1,3)

console.log(myn1)
console.log(myn2)

console.log("C", myArr)


// The differnce between slice and splice is 


// (1) Splice modifies the array whereas slice don't modifies the array

// (2) Splice takes the whole given range but slice ignore the last range


