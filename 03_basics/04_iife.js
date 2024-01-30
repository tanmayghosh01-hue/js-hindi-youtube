// Immediately invoked function expressions

// Pollution by global scope is the problem varibles problem to remove that issue we use iife..


(function chai() { // this is named iife
    console.log('DB CONNECTED')
})(); // to stop the context of this function to another one use semicolon to run two iife lol~

( (name) => { // this is un named iife
    console.log(`DB CONNECTED #2 ${name}`)
})('Harsh Dattarwal')



