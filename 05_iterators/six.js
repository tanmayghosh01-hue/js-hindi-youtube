//const coding = ["js", "ruby", "java", "python", "cpp"]


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )

// const newNums = myNums.filter( (num) => {
//     return num > 4 // if use scope then explict return should be mentioned
// } )

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums)

const books = [
    {title : 'Book One', genre : 'Fiction', publish: 1981, edition: 2004},
    {title : 'Book Two', genre : 'History', publish: 1982, edition: 2005},
    {title : 'Book Three', genre : 'Drama', publish: 1983, edition: 2006},
    {title : 'Book Four', genre : 'Action', publish: 1984, edition: 2007},
    {title : 'Book Five', genre : 'Horror', publish: 1985, edition: 2008},
    {title : 'Book Six', genre : 'Thriller', publish: 1986, edition: 2009},
    {title : 'Book Seven', genre : 'History', publish: 1987, edition: 2010}
]

    const booksNames = []

    // const userBooks = books.filter( (bk) => {
    //     if (bk.genre == 'History'){
    //         booksNames.push(bk.title)
    //     }
    // })
    const clientBooks = books.filter( (bk) => {
        // if (bk.publish > 1982 && bk.publish < 1985){
        //     booksNames.push(bk.title)
        // }
        return bk.publish > 1984
    })

    console.log(clientBooks)