 // //-----------------------------------------------:(ASSIGNMENT NO 23):----------------------------------------------//

// // Tests that evaluate to true
let car = 'honda';
console.log("Is car == 'honda'? I predict True.")
console.log(car == 'honda') //true
let bike = "yamaha";
console.log("Is bike == 'yamaha'? I predict True.")
console.log(bike== 'yamaha') //true
let age = 22
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True, because age (25) is greater than 20
let city = "New York";
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // True, because city is indeed 'New York'
let temperature = 30;
console.log("Is temperature < 40? I predict True.");
console.log(temperature < 40); // True, because temperature (30) is less than 40

// Tests that evaluate to False
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False, because car is 'subaru', not 'honda'

console.log("Is bike == 'ducati'? I predict False.");
console.log(bike == 'ducati'); // False, because bike is 'yamaha', not 'ducati'

console.log("Is age < 20? I predict False.");
console.log(age < 20); // False, because age (25) is not less than 20

console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // False, because city is 'New York', not 'Los Angeles'

console.log("Is temperature > 40? I predict False.");
console.log(temperature > 40); // False, because temperature (30) is not greater than 40

// //-----------------------------------------------:(ASSIGNMENT NO 24):----------------------------------------------//

let fruit = "peach";
let veg = "potato";
let rollno = 21;
let drink = "water";
let things = ["pen","pencil","marker"]

// // Tests for equality and inequality with strings
console.log("Is fruit == 'peach'? I predict True");
console.log(fruit== 'peach'); //true

console.log("Is fruit =! 'apricot'? I predict True");
console.log(fruit!= 'apricot'); 

// // Tests using the lower case function
console.log("Is veg.toLowerCase() == 'potato'? I predict True");
console.log(veg.toLowerCase() == 'potato'); //true

console.log("Is veg.toLowerCase() == 'POTATO'? I predict False");
console.log(veg.toLowerCase() == 'POTATO'); //FALSE

// //greater than and less than
console.log("Is rollno > 21? I predict false");
console.log(rollno > 21); //false
console.log("Is rollno <= 21 I predict true");
console.log(rollno <= 21); //true

// //// Tests using "and" and "or" operators
console.log("Is drink == 'water'and is fruit == 'peach'? I predict True");
console.log(drink == 'water' && fruit == 'peach'); //true

console.log("Is drink == 'juice'||Is veg == 'coriander' ? I predict false");
console.log(drink == 'juice' || veg == 'coriander'); //false

// Test whether an item is in an array
console.log("Is things == 'pen'? I predict True");
console.log(things.includes('pen')); //true

// // Test whether an item isn't in an array
console.log("Is things == 'ink'? I predict false");
console.log(things.includes('ink')); //false

// //-----------------------------------------------:(ASSIGNMENT NO 25):----------------------------------------------//

// // Alien Colors #1
let alien_color1: string = 'green';

if (alien_color1 === 'green') {
    console.log("You just earned 5 points");
}

alien_color1 = 'red';

if (alien_color1 === 'green') {
    // This block will not execute because alien_color is not 'green'
    console.log("You just earned 5 points");
}
// //-----------------------------------------------:(ASSIGNMENT NO 26):----------------------------------------------//
// // Alien Colors #2

let alien_color2: string = 'green';

if (alien_color2 === 'green') {
    console.log("You just earned 5 points for shooting the alien.");
} else {
    console.log("You just earned 10 points.");
}

 alien_color2 = 'yellow';

if (alien_color2 === 'green') {
    console.log("You just earned 5 points for shooting the alien.");
} else {
    console.log("You just earned 10 points.");
}
// //-----------------------------------------------:(ASSIGNMENT NO 27):----------------------------------------------//
// // Alien Colors #3


let alien_color3 = 'green';

if (alien_color3 === 'green') {
    console.log("You just earned 5 points.");
} else if (alien_color3 === 'yellow') {
    console.log("You just earned 10 points.");
} else if (alien_color3 === 'red') {
    console.log("You just earned 15 points.");
}

// Change the value of alien_color3
alien_color3 = 'yellow';

if (alien_color3 === 'green') {
    console.log("You just earned 5 points.");
} else if (alien_color3 === 'yellow') {
    console.log("You just earned 10 points.");
} else if (alien_color3 === 'red') {
    console.log("You just earned 15 points.");
}

// Change the value of alien_color3 again
alien_color3 = 'red';

if (alien_color3 === 'green') {
    console.log("You just earned 5 points.");
} else if (alien_color3 === 'yellow') {
    console.log("You just earned 10 points.");
} else if (alien_color3 === 'red') {
    console.log("You just earned 15 points.");
}
