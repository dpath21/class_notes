// // Async JS Fxs
// // /*  -async returns a promise 
// //     -await makes a fx wait for a promise
// // */

// async function asyncAction() {
//     setTimeout(() => {
//         console.log("Async finally hit!")
//     }, 3000);
//     }
    
//     asyncAction()
    

// function standardFunction () {
//     return console.log("1 This is a standard function.")
// }

// standardFunction();

// async function asyncFunction () {
//     return console.log("2 This returns a promise.")
// }

// asyncFunction()

// // async function asyncFunction() {
// //     return Promise.reject("this is rejected")
// // }

// Promise
/* 
Commit to something
-completed: resolved
-rejected
*/

// let p = new Promise((resolve, reject) => {
//     //promise object with one function with resolve and reject parameters
//     let a = 1 + 2 
//     if (a === 2) {
//         resolve("Promise successful and resolved")
//     } else {
//         reject("Promise rejected")
//     }
// }) 

// p.then((message) => {
//     //anything inside .then is a resolve. this takes a fx with a single parameter
//     console.log(`This is the .then() ${message}`)
// }).catch((message) => {
//     // anything inside .catch is a reject state
//     console.log(`This is the .catch() ${message}`) 
// })

// Try, Catch, Throw, and Finally

// try {
//     //tests a block of code
//     callingAFxThatDoesntExist()
//     console.log("Start of the try")
// } catch(err) {
//     //handles the error
//     console.log("Error has occurred " + err) //can do err.name or err.message (doesn't work in every browser)
// } finally {
//     //executes the code after try/catch regardless of the result
//     console.log("Finally ALWAYS runs")
// }


// Custom Errors
let json = '{"age": 30}'

try {
    let user = JSON.parse(json)
    if (!user.name) {  // ! before the text to say not true // "If user.name is not there" )
        throw new SyntaxError("Incomplete data: no name")
    }
}catch(e){
    console.log(`JSON Error: ${e}`)
}

function upperCase(name) {
    if (typeof name != "string"){
        throw TypeError("Name must be a string")
    }
    return name.toUpperCase();
}


// function addNums(x, y) {
//     let sum = x + y
//     return(sum)
// }

// addNums(5,5) 

// let result = addNums(5,5)
// let result2 = addNums(7, 15)

// document.querySelector(".result").innerText = result
// document.querySelector(".result2").innerText = result2



