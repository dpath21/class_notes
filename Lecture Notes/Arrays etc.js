// Arrays & Objects

// temporary way to store data

// Array - a high level, list like object used to be traversed and mutated -- to go through & able to be changed
// - uses integers as element index
// - they are zero indexed: begin at zero
// - the last object at array length -1
// - can be accessed by bracket notation (index) or dot notation (method)

// Create an array

let british = ["Rolls Royce", "Bentley", "Caterham", "Aston Martin"];
console.log(british[0], british[3]); /*to call more than one, at different positions*/ 

console.log(british[british.length -1]); /*british.length within the bracket of the british. without brackets, it would just return the index, 3*/

// Array Methods

console.log(british.length) //returns length, how many items, NOT an index
british.push //adds an element to end of an array

british.push("MINI", "VW"); //can add more with a comma to separate strings
console.log(british);

// Splice

british.splice(0, 1, "Jaguar"); // structure: index to start at, how many to remove, what to replace item with; removes an element, and if necessary inserts new elements in their place, returning the deleted elements
console.log(british);

// pop - removes just the last element of an array

british.push("MINI")
console.log(british)


// british.splice(0, 1, "Jaguar");
// console.log(british);

let bReturn = british.pop(); 
console.log(bReturn)
console.log(british)

// unshift, inserts to start of the array

console.log(british.unshift("MINI", "Land Rover"));
console.log(british)


console.log(british.shift()); // removes start element
console.log(british);


console.log(british.unshift("MINI", "Land Rover"));
console.log(british)
console.log(british.indexOf("Bentley")); // searches an array for an index of element
console.log(british.includes("MINI")); //tells you whether array has specific element

Advanced array manipulations

let german = ["BMW", "Mercedes", "Audi", "Porsche", "Alpina", "VW"]; 
for (cars of german){
    console.log(cars)
}