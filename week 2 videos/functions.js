/*FUNCTIONS*/ 

//Broadly, functions 
// 1) take some input which the function will handle/process
// 2) they process the given input
// 3) they return some value, usually
// 4) they can be used as many times as we want, reducing repetition 

//ex 1 -- passing #s

function newFunc(num){
    return num + 1;
}

console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//ex 2 - passing strings

function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Divya', 'Pathak'));

let superImportantSentence = sentence('Nicky', 'Jones');
console.log(superImportantSentence);

//ex 3 - complex types; an array & console logs each array input

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2);

//this had a "SIDE EFFECT" - simple alternative to Return

function addNums (x, y, z, a) {
    let result = x + y + z - a; 
    return result
}

console.log(addNums(1, 5, 7, 2))

