/* LOOPS

functions
arrow function

allows you to repeat code for x # of times all at once; functions allows you to repeat on demand

*/

/* Loops offer a quick and easy way to do something repeatedly

There are many different kinds of loops but they all do ~the same thing:
    For statement
    Do while
    While
    Labeled
    Break
    Continue
    For in
    For of 
    .forEach
    .map
*/

/* Loop structure
1. creation of an indexing variable
2. a run condition
3. change to the indexing variable
*/ 

// count to 10 from 0 and log the numbers: 
for (let i = 0; i <=10; i++){
    console.log(i);
}

/* loops can run infinitely
 for (let i = 0; i++){
    console.log(i);
 } */

 //counts to -25 by -3, starting from 2, logs the numbers

 for (let i = 2; i >= -25; i = i -3){
     console.log(i);
 }

 //display the letters in a name individually 
 let name = 'Kinkade';

 for (let i = 0; i < name.length; i++){
     console.log(name[i]);
 }

 /*using a variable to define the run condition (2nd part of the for statement) ; the square bracket notation works for strings, similar to accessing the parts of an array; you can think of the name as a type of ~array~; K is @ pos 0; i @ pos 1 etc. 1 being 0 refers to the 0 position part of the string/array*/ 

 //for loops can use lots of variables: 
 let start = 2;
 let stop = Math.floor(Math.random()*30);
 let increment = 3;

 for (let i = start; i <= stop; i = i + increment){
     console.log(i);
 }

 /*math.random is a built in object with a random method; gives us a # between 0 & 1; math.floor shaves off the decimal since the random can give us decimals (between 0 and 1)*/


