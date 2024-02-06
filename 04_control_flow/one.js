const isUserLoggedIn = true
const temperature = 41

if (temperature === 41) {
    console.log("less than 50")
} else {
    console.log("temperature is greater that 50")
}


console.log("Execute")


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        break;
}

const userEmail = []

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// falsy values

// false , 0, -0, BigInt On, "", null, underfined, NaN

// truthy values

// "0", 'false', " ",[ ], {}, funtion(){} 

// Nullish Coalescing Operator (??)
let val1
// val1 = 5 ?? 10

// val1 = null ?? 10

val1 = undefined ?? 15 ?? 10

console.log(val1)


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice < 80 ? console.log("less than 80") : console.log("more than 80")