function sayMyName() {
    console.log("T")
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("A");
    console.log("Y");
}

// Reference ----------------

sayMyName() // --> execution


// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2)

// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result;
}

const result = addTwoNumbers(2,3)

console.log("Result ", result)

function loginUserMessage(username="Sam") {
    if(username === undefined){
        console.log("Please entera username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())