//APIs == Application Programming Interface
// How to retrieve data from an external data provider/external organization with data available for use & interaction (Google Maps, NYT, etc)

//ASYNCHRONOUS code -- doesn't work from top to bottom. 

// setTimeout(() => console.log('this is a test of timeouts'), 2000) //this was delayed by 2 seconds! 

// PROMISE -- a promise; when we make an API call, that call received and give us data back takes TIME. one way to handle the async request and response is to use a promise

let promise = new Promise (function(resolve, reject){
    setTimeout(() => {
        if (false){
            resolve('success');
        } else {
            reject('failure'); //this is the ERR MESSAGE
        }
    }, 3000);
    })

//to handle the success of the promise
promise
.then(success => console.log(success))
//if (false){... //if we were to change to *FALSE*, we need to add on a CATCH
.catch(err => console.log(err))

//promises allow your code to wait while the rest of your code body runs

console.log('this code is after the promise and .then chain') //this fires first & instantaneously, but then the setTimeout function runs AFTERWARD, cause it's ASYNC and on its own clock

function playFunc() {
    return 5;
}
console.log(playFunc())





