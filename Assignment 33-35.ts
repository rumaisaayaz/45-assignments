

// //-----------------------------------------------:(ASSIGNMENT NO 33):----------------------------------------------//

let cordialNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let cordialnumber of cordialNumbers) {
  if (cordialnumber === 1) {
    console.log(`${cordialnumber}st`);
  } else if (cordialnumber === 2) {
    console.log(`${cordialnumber}nd`);
  } else if (cordialnumber === 3) {
    console.log(`${cordialnumber}rd`);
  } else {
    console.log(`${cordialnumber}th`);
  }
}

// //-----------------------------------------------:(ASSIGNMENT NO 34):----------------------------------------------//

let pizza: string[] = [
  "pepperoni pizza",
  "chicken tikka pizza",
  "cheese pizza",
];
for (let flavours of pizza) {
  console.log(`I would like to have a slice of ${flavours}.`);
}
console.log("Pizza is one of the best comfort foods.");

// //-----------------------------------------------:(ASSIGNMENT NO 35):----------------------------------------------//

let animals = ["Lion", "Tiger", "Leopard"];

for (let animal of animals) {
  if (animal === "Lion") {
    console.log("The Lion is the king of the jungle.");
  } else if (animal === "Tiger") {
    console.log("The Tiger is known for its strength and stripes.");
  } else if (animal === "Leopard") {
    console.log("The Leopard is famous for its agility and spotted coat.");
  }
}

console.log(
  `${animals.join(
    ", "
  )} are all big cats known for their strength, agility, and carnivorous diet.`
);
