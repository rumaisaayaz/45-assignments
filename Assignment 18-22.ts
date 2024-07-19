// //-----------------------------------------------:(ASSIGNMENT NO 18):----------------------------------------------//

let places = ["Greece", "France", "America", "Korea", "China", "Qatar"];
let sort = places.slice().sort();
console.log("                SORTED LIST                ");
sort.forEach((place) => {
  console.log(place);
});
console.log("                ORIGNAL LIST               ");
places.forEach((country) => {
  console.log(`${country}`);
});
console.log("                 REVERSED ALPHABETICAL ORDER LIST              ");
let reverse = sort.slice().reverse();
reverse.forEach((place) => {
  console.log(place);
});
console.log("                REVERSED LIST               ");
let reversed = places.reverse();
places.forEach((country) => {
  console.log(`${country}`);
});
console.log("               ORIGNAL LIST               ");
let orignal = places.reverse();
places.forEach((country) => {
  console.log(`${country}`);
});
console.log("                SORTED LIST               ");
let sorted = places.sort();
places.forEach((country) => {
  console.log(`${country}`);
});
console.log("                REVERSE-SORTED LIST               ");
let rev_sor = places.sort().reverse();
places.forEach((country) => {
  console.log(`${country}`);
});

// //-----------------------------------------------:(ASSIGNMENT NO 20):----------------------------------------------//
let colours = ["blue", "red", "pink", "white"];
colours.forEach((color) => {
  console.log(`${color}`);
});
// //-----------------------------------------------:(ASSIGNMENT NO 21):----------------------------------------------//
let object = {
  name: "rumaisa",
  age: "12",
  class: "4",
};
console.log(object);
// //-----------------------------------------------:(ASSIGNMENT NO 22):----------------------------------------------//

// // intentional error
colours = ["blue", "red", "pink", "white"];
colours.forEach((color) => {
  console.log(`${color}`);
});
console.log(colours[10], console.error());
