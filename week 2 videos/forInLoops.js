/* For In Loops - depends upon something being true; does NOT require that the thing you are looping through (an object or array, etc) be numbered */

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item);
    console.log(student[item]);
}

/* ITEM represents the KEYS in the object (categories: name, awesome, degree, week)*/ 

/* ARRAYS */

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

/* CAT represents the number/positions of the values in the ARRAY */ 


//let's write a for-in loop that capitalizes the first letter in a name

let instructor = 'pAuL'
let capName; 

for (n in instructor){
    if (n == 0){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }

}
console.log(capName);