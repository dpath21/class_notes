/* Objects are containers for values in a JSON format. JSON is a way to transmit the code/pass the code around the web (Javascript Object Notation)
-exists as a string** v important bc since it exists as a string, it needs to be converted to its native javascript object 
-has properties and methods
-.property 
-.method()
-associative arrays -- each property is associated with a string value

*/

// define JS object with an object literal

let car = {
    // key : value pair (properties) that are comma separated
    make: "Porsche",
    model: "911",
    country: "Germany",
    drive: "Walter Rohl",
    association: {
        name: "Jeff",
        lastName: "Adams",
    }
}

// Accessing object values

console.log(car.make) // access using key

console.log(car["model"]) // access using object key

let returnKeys = Object.keys(car)
console.log(returnKeys) //shows the keys
console.log(car) //shows keys and values

console.table(car) //shows it as a table

/* ALT + CLICK gives you additional cursors!!! */ 


//Object property reassignment

car.make = "Maserati";
console.log(car.make)
console.log(car) // JS reassigns in the order of the code, top to bottom, left to right

car["model"] = "GranTurismo S";
console.log(car)

console.log(car.association.name)

// Object Constructor 

let client = new Object //constructs an empty object without having to hard-code one in
console.log(client)

client.firstName = "Paul";
client.lastName = "Niemczyk";
client.birthYear = 1990;
console.log(client)

let manager = {
    firstName: "Brad",
    lastName: "Titus",
    birthYear: 1990,
    calcAge: function() {
      return 2021 - this.birthYear
    }
}
console.log(manager.calcAge())
