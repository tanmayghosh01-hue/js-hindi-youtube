

function one() {
    const username = "tanmay"


    function two() {
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "tanmay"
    if (username === "tanmay") {
        const website = "youtube"
        console.log(username + " " + website);
    }
    // console.log(website);
}

// console.log(username)


// ++++++++++++++++++++ intresting ++++++++++++++++++


// addone(5) we can also call funtion from here too for regular function declaration--

function addone(num) {
    return num + 1
}

addone(5)

//addTwo will not work here because its declaration is in variable

const addTwo = function(num) {
    return num + 2
}

// addTwo(5)

console.log(addTwo(5)) // This prints the variable function value