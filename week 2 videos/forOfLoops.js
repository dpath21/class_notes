/* For Of Loops */

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

// for (item of student){
//     console.log(item);
// }

/* This gives us an error: "student is not iterable" -- 
'For Of' will not handle the OBJECT ; OF requires that your 'thing' you're looping through be ITERABLE; that means it needs to be NUMBERED. The KEYS in an OBJECT are NOT numbered in any way; they are random, no numerical order; for in loops, however, do not require that your thing you loop through be numbered. 

an array the order often DOES matter (not always) -- but like a recipe for example. the first thing in the array is the first thing in the recipe, and it goes in ORDER from there*/

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');}

    /* In this case, cat does not represent the position the cat is at, it represents the VALUE of each position. 'For of' grabs the value of the thing, not the position or the key like the 'For in' loop */