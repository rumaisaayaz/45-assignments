//-----------------------------------------------:(ASSIGNMENT NO 2):---------------------------------------------------\\

let rumaisa = "hey! how are you?";
console.log(rumaisa);

//-----------------------------------------------:(ASSIGNMENT NO 3):---------------------------------------------------\\

let names = "rameen ayaz";
console.log(names.toUpperCase());
console.log(names.toLowerCase());
let titleCaseName = names.split(" ")
  .map((names) => 
  {
     return names[0].toUpperCase() + names.slice(1).toLowerCase();
  })
  .join(" ");
console.log(titleCaseName);


//-----------------------------------------------:(ASSIGNMENT NO 4):---------------------------------------------------\\
console.log(`- Winston Churchill`);
console.log(
  `"Success is not final, failure is not fatal: It is the courage to continue that counts."`
);

//-----------------------------------------------:(ASSIGNMENT NO 5):---------------------------------------------------\\

let famous_person = "Winston Churchill";
let message =
  "Success consists of going from failure to failure without loss of enthusiasm.";
console.log(`${famous_person} - "${message}"`);
