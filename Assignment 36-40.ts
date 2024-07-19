// //-----------------------------------------------:(ASSIGNMENT NO 36):----------------------------------------------//
function makeShirt(size: string, message: string): void {
  console.log(`The shirt size is ${size} and it says "${message}".`);
}
// Calling the function
makeShirt("Medium", "Keep calm and code on.");

// //-----------------------------------------------:(ASSIGNMENT NO 37):----------------------------------------------//
function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(`The shirt size is ${size} and it says: "${message}".`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("small");

// //-----------------------------------------------:(ASSIGNMENT NO 38):----------------------------------------------//
function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

// Call the function for different cities
describe_city("Karachi");
describe_city("London", "United Kingdom");
describe_city("Tokyo", "Japan");

// //-----------------------------------------------:(ASSIGNMENT NO 39):----------------------------------------------//
function city_country(city: string, country: string) {
  return console.log(`${city},${country}`);
}
city_country("London", "United Kingdom");
city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");

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
