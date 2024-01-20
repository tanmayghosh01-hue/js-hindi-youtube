//const tinderUser = new Object() -> Singleton object

const tinderUser = {}  // Non - Singleton Object


tinderUser.id ="123abc"

tinderUser.name = "Arjun"

tinderUser.isLoggedIn = false


// console.log(tinderUser)


const regularUser = {

    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Karan",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))



console.log(tinderUser.hasOwnProperty('isLoggedIN'))


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Tanjit"
}


const {courseInstructor: instructor} = course

console.log(instructor)




