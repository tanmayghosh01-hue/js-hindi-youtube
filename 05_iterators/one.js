// for

let array = [1,2,3,4,5]

// for (let i = 0; i < 19; i++) {
//     // const element = array[index];
//     console.log(i)
// }


// console.log();

// for (let i = 0; i <= 10; i++) {
//         console.log(`Outer loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + '=' + i*j)
//     }
// }

// let myArray = ["flash", "batman", "superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
    
// }

for (let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log(`Detected 5`)
        break
    }
    
    console.log(`value of i is ${index}`)
    
}
for (let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log(`Detected 5`)
        continue
    }
    
    console.log(`value of i is ${index}`)
    
}


















