//week 2 day 4 challenge

// Bronze
/* Create for loop that runs until it has reached the end of the alphabet array, and prints each letter to the console */
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i <= [25]; i++){
    console.log(alphabet[i]);
}  //'let' is not necessary

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (let i = 0; i <= [25]; i++) {
    if ([i] % 2 === 0) {
      console.log(`the letter is ${alphabet[i]}`);
    } else console.log(`the index is odd`);
}


// or, for cleaner code, you can use a for IN loop: 
// for (letter in alphabet) {
// console.log(print the letter);{
// else {
//       console.log(index is odd)
//       }}

//using the square brackets INDEXES information. like if you want the actual values returned and not the position, use square brackets. 

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (i in alphabet) [i] % 2 === 0 ? console.log(`the letter is ${alphabet[i]}`) : console.log(`the index is odd`);

/* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/


let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

let arr = [];
for (character in fellowshipOfTheRing.members) {
        if (character[0] != 'A' && character[0] != 'E' && character[0] != 'I' && character[0] != 'O' && character[0] != 'U') {
            arr.push(character)
        }
    };

    console.log(arr);

let fellowshipOfTheRing = {
        members: {
            Gandalf: 'Staff',
            Orodo: 'Sting',
            Sam: 'Lembas Bread',
            aragorn: 'Anduril',
            Eegolas: 'Bow of the Galadhrim',
            Gimli: 'Walking Axe',
            Pippin: 'Barrow Blades',
            Merry: 'Barrow Blades',
            Boromir: 'Horn of Gondor'
        },
        purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
        formed: '25 October, 3018',
        dissolved: '26 February, 3019'
    }

let arr = [];
let vowels = ['A', 'E', 'I', 'O', 'U']
for (character in fellowshipOfTheRing.members) {
        if (vowels.includes(character[0])) {
        } else {
            arr.push(character)
        }
    };

    console.log(arr);