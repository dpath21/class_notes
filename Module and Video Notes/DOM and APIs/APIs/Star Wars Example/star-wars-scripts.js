let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) {
    // console.log(response)
    return response.json(); //'response' is an OBJECT 
})

.then(function(json) {
    console.log(json)
    let people = json.results; //the results key of the json object

    for (p of people){
        //a FOR OF loop. This will iterate over an array and print the actual OBJECTS in the array.
        console.log(p)
        let listItem = document.createElement('li'); //this is a CHILD of the UL to which we will append on line 18
        listItem.innerHTML = '<p>' + p.name + '</p>'; // using innerHTML to set the "p" tag to the value
        starWarsPeopleList.appendChild(listItem) //append the doc.createElement variable to the doc.querySelector variable to get it to appear in that part of the HTML
    }

    // for (p in people) {
    //     //a FOR IN loop. This only prints the PROPERTY, which in the case of an array is just the INDEX. So we will only see a number (0 through 9 or whatever)
    //     console.log(p) 
});

