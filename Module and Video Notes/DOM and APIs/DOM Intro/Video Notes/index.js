// //ELEMENT BY ID

// const header = document.getElementById("header"); //inside the parens is a STRING
// console.log(header);

// header.style.color = "#ed55ca";
// header.innerText = "Hello World"

// //ELEMENTS BY CLASS NAME (PLURAL)

// const errorList = document.getElementsByClassName("error-list");
// console.log(errorList);
// errorList[1].innerText = "I changed error 2"


// //-->Ex 1 Looping [FOR LOOP]
// for (let i = 0; i < errorList.length; i++){
//     errorList[i].style.color = "red"
// } //this is how to loop through the elements by class name, to get each line within errorList to be styled red

// //-->Ex 2 Looping [FOR OF LOOP]
// for(error of errorList){
//     error.style.color = "green"
// }

// // -->Ex 3 Looping - For Each - this does NOT Work! does NOT work on any HTML COLLECTIONS. CANNOT DO in this list. Does work with a different query method. 
// // errorList.forEach((error) => (error.style.color = "purple"));

// //ELEMENTS BY TAG NAME (PLURAL)

// // What are tags??
// // p tag, h tag, div tag, td tag, li, ul tag, etc; basically tags with <>,</>
// // this scrubs the document for everything with that tag

// const tags = document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText = "Changing the P text" //using "TAGS" here, not the p. The p is in the HTML. The TAGS is now in the JS, REFERRING to the HTML. So, use TAGS here, and find the corresponding POSITION of the array and continue with innerText/Style, etc whatever

// const list = document.getElementsByTagName("li");
// console.log(list);

// list[1].innerText = "Changing the 2nd list item with getElementsbyTAGNAME!"

// // --> Example of FOR LOOP within a ELEMENTSBYTAGNAME

// // list[0].style.fontStyle = "italic"
// // list[1].style.fontStyle = "italic"

// // instead of 1 by 1 like above, you can write a FOR LOOP
// for (let i = 0; i < list.length; i++){
//     list[i].style.fontWeight = "bold"
// }

// QUERY SELECTOR

// QS and QS All query the DOM For a CSS SELECTOR. Can be tags, IDs, classes, can be much more specific
// QS returns ONE thing that matches the specific selector (QS). Will only give you the FIRST result, not the rest if there are more than one

const header = document.querySelector("h1")
console.log(header)

const errorList = document.querySelector(".error-list") //REMEMBER, the string HAS to match what's in your HTML/CSS !!!!EXACTLY!!!! you were getting "null" here a lot because you had the L in 'list' capitalized when it should actually be LOWER CASE to match the HTML text!!
console.log(errorList)

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)"); // ** Highlight the element ON the HTML page itself. Right click. Inspect. The line will be highlighted in the inspector tool/console. Right click the line. Copy. Then COPY SELECTOR. This is what gives you that string ^^^ with the "> > >" to paste into your querySelector string.
console.log(errorList2)

//QUERY SELECTOR ALL 
// this will go through the entire doc and give us an array structure, will be beneficial to be able to iterate over the array (for loops, etc). Can use the same CSS selectors (tags, classes, ids, etc)

// const listItems = document.querySelectorAll(".error-list")
// console.log(listItems)

const headerTags = document.querySelectorAll("h1")
console.log(headerTags)

console.log(headerTags[1])

headerTags.forEach(h => {
    h.style.color = "#03e3fc"
})

const listItems = document.querySelectorAll(".error-list")
console.log(listItems)

listItems.forEach(item => {
    item.style.fontStyle = "italic"
})




