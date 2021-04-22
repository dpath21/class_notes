/* 4 Main Request verbs for HTTP Requests:  
1. Post - user is creating new information
2. Get - user is retrieving existing information
3. Put - user is overwriting existing information or updating information
4. Delete - user is removing existing information

WHAT IS JSON? 
JSON stands for JavaScript Object Notation - can convert any JS object into readable text that can be sent to the server or vice versa
--JSON is TEXT ONLY. So EVERYTHING is a text string, in quotes. So in a JSON object, the keys (name:, age:, etc) all have quotes around them as opposed to as just a regular object written in original javascript, the keys would not have quotes, only quotes around string values. 

SO --
JSON : 
"name" : "Divya"

Non-JSON JS object like we've practiced: 
name: "Divya"

JSON can be "minified" or made smaller by removing excess white space, so all the JS code is written in one big block without line by line spacing: 

NON-MINI / FULL: 
"name": "Superman",
"age": 79,
"secretIdentity": "Clark Kent",
"powers": [
    "Super strength",
    "Heat vision",
    "Flight",
    "X-ray vision",
    "Super speed"]

  VERSUS THIS (THIS IS MINIFIED:) {"name":"Superman","age":79,"secretIdentity":"Clark Kent","powers":["Super strength","Heat vision","Flight","X-ray vision","Super speed"]}


HTTP RESPONSES: 

Value	Category	    Explanation
1xx	   Informational    Request received; continuing process
2xx	   Success	        The action was successfully received, understood, and accepted
3xx	   Redirection	    Further action must be taken in order to complete the request
4xx	   Client Error	    The request contains bad syntax or cannot be fulfilled
5xx	   Server Error	    The server failed to fulfill an apparently valid request

(Like 404, 502, 418, etc)
*/

function callbackFunction(){ //self contained, no parameter
    const bread = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return bread;
}

function showGreeting(dataFromFunction){ //dataFromFunction is a PARAMETER. It is a PLACEHOLDER. Once the callbackFunction passes through the cheese door, it becomes an ARGUMENT. Think about the parameter as a door. If it does not have a parameter, it is SELF CONTAINED. If it does have a parameter, you can manipulate.
    return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
}

console.log(
    showGreeting({name: 'Divya'})
)
//none of this fires until you HOIST on line 60

/* PROMISES
Have 3 states:
1. Pending
2. Resolved
3. Rejected */

// Example

//Boolean
var amIGood = true;

//Promise
var receiveGift = new Promise(
    function (resolve, reject) {
        if (amIGood){
            var gift = {
                brand: 'HasMattelbro',
                item: 'Action figure'
            };
            resolve(gift); //fulfilled 
        } else {
            var naughty = "You get coal"
            reject(naughty); //rejected
        }
        }
)

//Proper syntax: 
// new Promise(/*executor*/ function (resolve, reject) {...});

//Consume the promise

var checkTwice = function () { //self-contained b/c no parameter
 receiveGift
 .then(function (fulfilled) {
     // nice list = gift
     console.log(fulfilled);
     //output -- gift object above
 })
 .catch(function(error) {
     //naughty = coal
     console.log(error);
     //output - coal message
 });
 };

//  checkTwice();

 //Promises are asynchronous

var playDate = function(gift) {
    return new Promise(
        function(resolve, reject) {
            var message = `What do you think of my new ${gift.brand} ${gift.item}?`;

            resolve(message);
        }
    );
}

//Promise Call
var checkTwice = function () {
    console.log('before Christmas'); //log before
    receiveGift
    .then(playDate)
    .then(function (fulfilled) {
        console.log(fulfilled);
    })
    .catch(function (error) {
        console.log(error)
    });
    console.log('after opening gifts') //log after
}

checkTwice()


// FETCH

/*What is fetch? allows us to pull resources from across the web. Centers around objects "REQUEST" and "RESPONSE", these are GENERIC OBJECTS. They can be used anywhere you need them. 

-Fetch is PROMISE based
-You can write a function to modify a request before it is sent
-Fetch does not sent cookies, authentication must be handled manually

1. The fetch METHOD takes in the resource's path as a MANDATORY argument (Fetch url)
2. The REQUEST object returns a PROMISE that resolves to the argument's RESPONSE
3. After retrieving a RESPONSE, many methods define the BODY content and how it will be handled. 
4. You can use the Request() and Response() constructors to directly create these objects, but they are MORE LIKELY to be created by other API actions

Basic Fetch Components: 
1. GlobalFetch: contains the fetch() used to pull the resource
2. Headers: HTTP response/request headers can be queries and allow you to do things such as retrieve, update, or delete. 
3. Request: a resource request. It contains the METHOD of the Request (GET, POST, etc); also contains the URL, associated headers, etc.
4. Response: the response to the request. It contains the headers and URL but MORE importantly REPLIES with the STATUS CODE to determine whether or not the request was successful
5. Body: contains methods relating to the main content of the response/request that allow you to specify content type and how to handle it

A basic fetch request: 

fetch('http://example.com/movies.json') // -> this is the ARGUMENT, the path of the resource
.then(function(response) {
    return reponse.json(); // -> this will return JSON. This is only and HTTP response. The json() method actually extracts the json//
})
.then(function(myJson) {
    console.log(myJson)
})

You can run a VIRTUAL SERVER on your computer to accepted the returned data from an API without deploying an application : 

