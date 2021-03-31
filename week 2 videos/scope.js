/* SCOPE 
What is scope? JS has both LOCAL and GLOBAL scope. 
Function is like a tool
*/

//Example1

var x = 12; /* GLOBAL*/ 

function scope(){
    var x = 33;
    console.log(x);

} //this function is LOCAL (elements inside the function are LOCAL)

scope(); /* this uses the function, and the var INSIDE the function, x =33; logs 33; b/c of scope! function has its own narrow view; any variables inside the function only exist within that function */
console.log(x);  /* this logs 12, the global variable */
/* if you try to console log "y", y has not been defined outside the function! */

/* Say you get rid of the var x = 33 inside the function (scope); the console.log will pull from the global var and print 12; the global var is available. but not the case when you have vars in the function. */ 


//Example 2

var x = 12;

function scope(){
    x = 33;  //no 'var'; this is VARIABLE REASSIGNMENT
    console.log(x);
}
scope()
console.log(x);

//Example 3

var x = 1;

function scope() {
    var x = 2;   /*INNER SCOPE*/
    function scopeInner() {
        var x = 3;  /*INNERMOST SCOPE*/
        console.log(x);
    }
    scopeInner ();
    console.log(x);
}
scope ()
console.log(x);

//Example 4 contrasts with ex5

var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);


//Ex 5 constrasts with 4

var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x);
    }
    console.log(x); // this does not give us 33 because VAR does NOT obey 'block' scope -- only cares if it's within the entire function, not just the innermost.
}

scope();
console.log(x);