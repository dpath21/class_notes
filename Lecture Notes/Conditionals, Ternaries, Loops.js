// Conditional Statements - if, if else/else if, switch, ternary

// IF STATEMENTS 
// Checks for a boolean value, if something is true it is truthy (a truthy statement) or falsy
//Truthy - if a condition is or can be true
//Falsy - if a condition is or can be false
// Some falsy values and expressions are: null, NaN(not a number), 0, and empty string (" "), and undefined

// If a condition is true, then JS will execute (perform) the code block
//Every if checks one, singular condition

// Declare a variable

/* The condition is held in the ( ), the code we perform if the condition is met is in the { } */

let isOpen = false; 

if (isOpen === true) {
    console.log('The door is open.');
}



if (isOpen === false) {
    console.log('The door is shut.');
}  // MAKE SURE YOU CHANGE THE INITIAL 'LET' DECLARATION, UPDATE IT TO FALSE


// IF ELSE
// If else is used to check a condition , but run a code block either the met condition or a separate code block if it does not meet the condition

let isOpen = false;

if (isOpen === true) {
    console.log('You can go inside, the door is open');
} else {
    console.log('The door is not open to enter.');
};

let temp = 70
if (temp >= 65){
    console.log('What a nice day')
} else {
    console.log('I need a sweater')
}

//ELSE IF
//Else if is used to check more than two conditions

let temp = 55;

if(temp >= 80){
    console.log('People are wearing shorts')
} else if (temp >= 65){
    console.log('This is t-shirt weather')
} else if (temp >= 50){
    console.log('Bring a sweater')
} else {
    console.log('I am not going outside')
}

let userName = "dPathak";
let password = "password12";

if (userName === "dPathak" && password === "password12"){
    console.log(`Welcome back, ${userName}. You're logged in.`);
} else if (userName === "dPathak"){
    console.log('Username correct. Password is incorrect.');
} else {
    console.log('You are not in our system. Please sign up.');
}

//SWTICH STATEMENTS - execute a block of code depending on the "cases"; 
// use case (condition): code block
// break - to end the code
// default - code to be ran if no cases are met; good practice

let favColor = 'purple';

switch (favColor) {
    case 'blue':
        console.log('sky blue');
        break;
    case 'red':
        console.log('rosy red');
        break;
    default: 
        console.log(`${favColor} is beautiful too`);
}

let doYouLikePizza = 'yes';

switch (doYouLikePizza) {
    case 'yes':
    case 'yeah':
    case 'duh':
        console.log('Me too, I love pizza.');
        break;

    case 'no':
    case 'nope':
    case 'nah':
        console.log('I will order something else');
        break;
    default:
        console.log('I cannot tell if that is yes or no');
};

// TERNARY
// Concise way to check two or more conditions using the syntax of ?/:

//Structure:
//( condition ) ? ( code to run if truth/truthy ) : ( code to run if false/falsy )

let temp = 70;

// Ternary

(temp > 75) ? console.log('Indiana summer temps') : console.log('Indiana spring temps');

let num = -10;

(num > 0) ? console.log('Positive number') : 
   (num < 0) ? console.log('Negative number') :
   console.log('Number is 0');

// LOOPS 
// For loop - a quick and easy way to iterate or "loop" something over and over, repeatedly
// Infinite loops are possible (best to avoid!) : ctrl + c while in terminal, or close VS Code

// 3 Parameters, each separated by a semicolon

//1. Initial expression
//2. Condition
//3. Increment/decrement expression

for (i = 0; i <= 10; i++) {
    console.log(i);
}

for (i = 0; i <= 20; i +=2){
    console.log(i)
}

let word = 'fantastic';

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);   
}

// NEEDS TO HAVE "WORD" before the "[i]" in the CONSOLE LOG, or whatever the "LET" criteria is; not just " console.log(i) " like with numbers.  