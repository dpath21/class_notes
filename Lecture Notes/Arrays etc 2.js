let german = ["BMW", "Mercedes", "Audi", "Porsche", "Alpina", "VW"]; 
// for (cars of german){
//     console.log(cars)
// }

// german.forEach(car => console.log(car))


//.map() -> transforms elements in the original array by callback function
// let germanUpperCase = german.map(car => car.toUpperCase())
// console.log(germanUpperCase)

//.filter() -> Creates a new array with elements that pass the test in a given function

// console.log(german.filter(car => car.startsWith("A")))

console.log(german.filter(car => car.startsWith("A") || car.startsWith("B"))) // can incorporate the && and || like with functions bc this is just a function, just with an arrow