/*Arrow Functions*/

// normal fx declaration -- fx declaration is for NAMED fx's

function coffee(){
    return 'coffee is good';
}

//normal fx expression - fx expression is for UNNAMED fx's

let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow fxs are ALWAYS anonymous 

let hotChoc = () => {
    return 'hot chocolate is queen';
}

console.log(hotChoc());

//arrow 2

let animals = (kittens, puppies) => {
    return `I have ${kittens} cats and ${puppies} dogs`
};

console.log(animals(3,2));
console.log(animals(0,0));

//arrow functions do not get hoisted, have to use fx after it gets defined

//CONCISE vs BLOCK bodies

//concise: single argument can exclude parentheses; a quick return can be on the same line as arrow w/o return keyword or curly brace block

let apples = x => `There are ${x} apples`;

console.log(apples(10));

//block body: don't need the parentheses around the x, either way works
//the return keyword MUST be written out explicitly in a block body

let bananas = (x) => {
    return `there are ${x} bananas`;
}
console.log(bananas(5));

//Line spacing - careful; the arrow HAS to follow directly after the parentheses 

let func = () => 'hi';
console.log(func());

let secondFun = () => //like if you put the arrow on line 59, it will return an error!
'hi';
