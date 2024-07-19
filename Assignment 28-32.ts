// //-----------------------------------------------:(ASSIGNMENT NO 28):----------------------------------------------//

function StageOfLife(age: number): string {
  if (age < 2) {
    return "The person is a baby.";
  } else if (age >= 2 && age < 4) {
    return "The person is a toddler.";
  } else if (age >= 4 && age < 13) {
    return "The person is a kid.";
  } else if (age >= 13 && age < 20) {
    return "The person is a teenager.";
  } else if (age >= 20 && age < 65) {
    return "The person is an adult.";
  } else if (age >= 65) {
    return "The person is an elder.";
  } else {
    return "Invalid age.";
  }
}
let ages = [1, 3, 7, 15, 30, 70];
for (let age of ages) {
  console.log(`Age ${age}: ${StageOfLife(age)}`);
}

// //-----------------------------------------------:(ASSIGNMENT NO 29):----------------------------------------------//
// Array of favorite fruits
let favorite_fruits: string[] = ["mango", "strawberry", "apple"];

// Checking for certain fruits in the array
if (favorite_fruits.includes("mango")) {
  console.log("I lOVE Mangoes!");
}

if (favorite_fruits.includes("banana")) {
  console.log("I really like bananas!");
}

if (favorite_fruits.includes("apple")) {
  console.log("I like apples!");
}

if (favorite_fruits.includes("grape")) {
  console.log("i like to have Grapes");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("Strawberries are my favourite!");
}

// //-----------------------------------------------:(ASSIGNMENT NO 30):----------------------------------------------//
// Array of usernames
let usernames: string[] = ["admin", "Eric", "John", "Alice", "Jane"];

// //Loop through the array and print a greeting to each user
for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again`);
  }
}
// //-----------------------------------------------:(ASSIGNMENT NO 31):----------------------------------------------//

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Removing all usernames from the array
usernames = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
}
// //-----------------------------------------------:(ASSIGNMENT NO 32):----------------------------------------------//

let currentUsers = [
  "rumaisa_ayaz",
  "hadi123",
  "muhammad_zaki2",
  "ayaz_uddin4",
  "rameenayaz3",
];
let newUsers = [
  "zaki_123",
  "rumaisa_ayaz",
  "ayaz_uddin4",
  "faizafahad12",
  "kinza_syed",
];
for (let newUser of newUsers) {
  let isAvailable = true;
  for (let currentUser of currentUsers) {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      isAvailable = false;
      break;
    }
  }
  if (isAvailable) {
    console.log(`Username ${newUser} is available.`);
  } else {
    console.log(`Username ${newUser} is not available.`);
  }
}
