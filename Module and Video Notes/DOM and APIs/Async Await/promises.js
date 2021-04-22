// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json))

// a FETCH in a FUNCTION ? 
// 

// async function slowResult (){
//     await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json))
// console.log('this is a message')
// }

// slowResult();

// ASYNC is a word we can put before/pre-pend to a function. It returns a promise. AWAIT can be pre-pended/put before anything that RETURNS a promise. 

async function slowResult (){
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    .then(res => res.json())
    .then(json => {json.lolProperty = 'this is a random property'; return json;})
    .then(json => console.log(json))
console.log('this is a message')
}

slowResult();
