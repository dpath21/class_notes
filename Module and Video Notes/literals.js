// LITERALS

let weekDays = ['M', "T", "W", "R", "F"];
console.log(weekDays.toString());

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

console.log(soup.c);

/* a, b, and c are keys; values are strings */ 

//array and object literals can hold primitive and complex types (arrays, objects, functions)

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}]; 

//                       0   1     2               3     4           5

console.log(complexArrLiteral[5]);


let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', array: [1, 2, 3], 
obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.array);   