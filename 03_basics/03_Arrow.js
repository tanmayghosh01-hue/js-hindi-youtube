

const user = {
    username : "Tanmay",
    price : 9099,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }


}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)


// function chai() {
//     let username = "Pankaj Tripathi"
//     // console.log(this.username) // this will output undefined as it will only work in objects scope
// }

// chai()

const chai = ()  => {
    let username = "tanay"
    console.log(this.username) 
    // this will produce undefined because in arrow function this is not bounded to local scope it is bounded to global scope

    // this is bound to the lexical scope of the function which is the scope in which is the scope in which the function is defined ,here in this chai() function is defined on global scope of node hmmm..
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 // implicit return of arrow function

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "tanmay"})

// return object with curly baces inside parenthesis

console.log(addTwo(3,4))

const myArray = [2,3,4,5,6,7,10]

// myArray.forEach(() => ()) 