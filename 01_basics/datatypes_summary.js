// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = false

const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 27349274298340293456456n

console.log(typeof bigNumber)


// Reference (Non-Primitive)

// Array, Objects, Functions


// null type returns object
// and symbol type returns symbol

const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
    name : "hitesh",
    age : 22,
}


const myFunction = function() {
    console.log("Hello World")
}


myFunction()

console.log(typeof bigNumber)

console.log(typeof myFunction)


/* 


1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// Reference (Non-primitive)

// Array, Objects, Functions