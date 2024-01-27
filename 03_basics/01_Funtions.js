function sayMyName() {
    console.log("T")
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("A");
    console.log("Y");
}

// Reference ----------------

// sayMyName() // --> execution


// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2)

// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result;
}

const result = addTwoNumbers(2,3)

// console.log("Result ", result)

function loginUserMessage(username="Sam") {
    if(username === undefined){
        console.log("Please entera username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 500, 700,2000));


const user = {
    username : "tanmay",
    prices : 20000
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)


// handleObject({
//     username: "saumya",
//     price : 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))