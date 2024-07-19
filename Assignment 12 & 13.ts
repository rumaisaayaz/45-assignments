// //-----------------------------------------------:(ASSIGNMENT NO 12):---------------------------------------------//

let namee = ["Rumaisa", "Rameen", "Hadi", "Zaki"];
namee.forEach((namee) => {
  console.log(` Hey ${namee}! Hope you are doing amazing❤️ `);
});
// //-----------------------------------------------:(ASSIGNMENT NO 13):----------------------------------------------//

const transportation: string[] = [
  "Honda motorcycle",
  "Tesla car",
  "Boeing airplane",
  "Yamaha jet ski",
];

transportation.forEach((transportation) => {
  switch (transportation) {
    case "Honda motorcycle":
      console.log(`Driving a ${transportation} would be amazing.`);
      break;

    case "Tesla car ":
      console.log(`I would like to own a ${transportation}.`);
      break;

    case "Boeing airplane":
      console.log(`Traveling in a ${transportation} would be a dream.`);
      break;

    case "Yamaha jet ski":
      console.log(`Riding a ${transportation} on the water sounds exciting.`);
      break;

    default:
      console.log(`I am interested in ${transportation}.`);
      break;
  }
});
