//challenge: 

let number = (x % 5 && x % 3);

var x = 40;

if (number = 0){
    console.log('fizz buzz');
} else if (number > 0) {
    console.log('fizz or buzz');
} else {
    console.log('hm');
}

// let x = -6;

// x > 0 ? console.log('x is positive') : console.log('x is negative');


// ANSWER: If else: 

// var FB = 10

// if(FB % 3 == 0 && FB % 5 == 0){
//     console.log('Fizz Buzz');
// } else if(FB % 3 == 0){
//     console.log('Fizz');
// } else if(FB % 5 == 0){
//     console.log('Buzz');
// } else{
//     console.log(`Your number, ${FB}, is divisible by neither 3 nor 5.`);
// }

// Switch: 

// let FB = 15;

// switch(FB % 3 === 0 && FB % 5 === 0){
//     case true:
//         console.log('Fizz Buzz');
//     case false:
//     switch (FB % 3 === 0){
//         case true:
//         console.log('Fizz');
//     case false:
//     switch (FB % 5 === 0){
//   default:
//     console.log('Buzz');
//             }
//         }
//     }


// ANSWER
let FB = 13;

switch (true){
    case (FB % 15 === 0):
        console.log('Fizz Buzz');
    break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz')
        break; 
    default: 
        console.log(`Your number ${FB} is not divisible by 3 or 5`);
}

// Ternary

let y = 13; 

y % 15 === 0 ? console.log('Fizz Buzz') : 
y % 3 === 0 ? console.log('Fizz') : 
y % 5 === 0 ? console.log('Buzz') : 
console.log(`Your number ${y} is not divisible by 3 or 5`);

//best cases for ternaries are true/false, yes/no things

