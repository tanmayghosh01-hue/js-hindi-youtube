// singleton



// Object.create -> creates singleton

//----------------------------------------
// object literal -> not sigleton

const mySym = Symbol("key1")



const JsUser = {
    name : "Tanmay",
    [mySym] : "mykey1",
    age : 18,
    location : "Bhilai",
    email : "tanmayghosh1st@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
console.log(JsUser["email"])
// console.log(JsUser["age"])
// console.log(typeof JsUser[mySym])
// console.log(JsUser[mySym]);

// JsUser.email = "ashutosh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Dinesh@rediff.com"
// console.log(JsUser)





myArray = ["t", "a"]



JsUser.greeting = function() {
    console.log("Hello JS user")
    return 1
}

JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`)
    return 1
}


console.log(JsUser.greeting());
console.log(JsUser.greeting2())
