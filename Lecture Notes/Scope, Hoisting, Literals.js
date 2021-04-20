// Day 4 - Functions, Scope, Hoisting, and Literals

//Literals : are HARD CODED. They are not variables. They represent values in JS. 

let mascot = 'Bulldog'
let myAge = '28' // this value is hardcoded
let arr = [] // this value is not hardcoded

/* Hoisting

General way of thinking ab code creation and execution. JS puts variables declarations and functions declarations into memory during compile phase of the code. So if you have 1000 lines of code, if line 250 is a function and line 400 is a var, they get loaded up first. Only var & func, NOT let and const
*/

console.log(name);

// declaration is the left sign; the value is the right side
var name = "Paul"


// Scope

let coffeeOrigin = "Ethiopia" //Paul's fav coffee; global scope

function exampleFunction () {
    let x = 'declared inside function' // local scope
    // console.log(x)
    // console.log(coffeeOrigin)
}

exampleFunction();
console.log(x);
