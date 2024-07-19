// //-----------------------------------------------:(ASSIGNMENT NO 40):----------------------------------------------//
function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist,
    title,
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

let album1 = make_album("Adele", "21");
let album2 = make_album(
  "The Beatles",
  "Sgt. Pepper's Lonely Hearts Club Band",
  11
);
let album3 = make_album("Taylor Swift", "1989", 13);

console.log(album1);
console.log(album2);
console.log(album3);

// //-----------------------------------------------:(ASSIGNMENT NO 41):----------------------------------------------//

let magicians: string[] = [
  "David Copperfield",
  "Dynamo",
  "Penn and Teller",
  "Criss Angel",
  "Derren Brown",
];
function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}
show_magicians(magicians);

// //-----------------------------------------------:(ASSIGNMENT NO 43):----------------------------------------------//
magicians = [
  "David Copperfield",
  "Dynamo",
  "Penn and Teller",
  "Criss Angel",
  "Derren Brown",
];
function makeGreat(magicians: string[]) {}
magicians.forEach((magicians) => {
  console.log(`${magicians} The Great`);
});
// //-----------------------------------------------:(ASSIGNMENT NO 44):----------------------------------------------//
function makeGreat1(arr: string[], modifier: (element: string) => string) {
  const copiedArray = [...arr]; // create a copy of the original array
  const modifiedArray = copiedArray.map(modifier); // apply the modifier function to each element
  modifiedArray.forEach((element) => console.log(element)); // print each element on a new line
}

const magician = [
  "David Copperfield",
  "Dynamo",
  "Penn and Teller",
  "Criss Angel",
  "Derren Brown",
];
makeGreat1(magician, (element) => element + " The Great.");
console.log("-------:(ORIGNAL ARRAY):-------");
let orrignalarray = magician;
orrignalarray.forEach((orrignalarray) => {
  console.log(`${orrignalarray}`);
});

// //-----------------------------------------------:(ASSIGNMENT NO 45):----------------------------------------------//
function Sandwich(...sandwhichitems: string[]) {
  console.log("The items your sandwich includes:");
  for (let sandwich of sandwhichitems) {
    console.log(`* ${sandwich}`);
  }
}

// Call the function three times with different number of arguments
Sandwich("chicken");
Sandwich("meat", "Cheese", "Lettuce");
Sandwich("Roast Beef", "Cheddar", "Tomato", "Mayo", "Mustard");
// ASSIGNMENT NO 45
interface CarSpecification {
  manufacturer: string;
  model: string | number;
  color: string;
  [key: string]: any;
}

function car(
  manufacturer: string,
  model: string | number,
  color: string,
  args: { [key: string]: any } = {}
): CarSpecification {
  return { manufacturer, model, color, ...args };
}

let car1 = car("civic", 2010, "silver", { sunroof: true });
let car2 = car("stavic", 2006, "black", { noOfSeats: 11 });
let car3 = car("corolla", 2018, "white");

console.log(car1);
console.log(car2);
console.log(car3);
