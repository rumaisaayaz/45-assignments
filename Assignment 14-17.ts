// //-----------------------------------------------:(ASSIGNMENT NO 14):----------------------------------------------//
// // making invite list of friends for dinner
console.log("                 INVITATION LIST                 ");
let invitationSent = ["alaya", "liyana", "almirah"];

// // sending invitations indivisually
invitationSent.forEach((guests) => {
  console.log(
    `Hey ${guests}! I'd love to invite you to join me for dinner. Looking forward to catching up and enjoying a meal together `
  );
});
// // not coming
let newInvitationSent = invitationSent.splice(1, 1, "fiza");
console.log("              Names of guests who can't come                   ");
console.log(
  `unfortunately ${newInvitationSent} won't be able to attend the dinner:(`
);

// //-----------------------------------------------:(ASSIGNMENT NO 15):----------------------------------------------//

// // replaced one guest with the another
console.log("                 UPDATED GUEST LIST                 ");
invitationSent.forEach((guests) => {
  console.log(`Hey ${guests}! I'd love to invite you to join me for dinner.  `);
});
// //-----------------------------------------------:(ASSIGNMENT NO 16):----------------------------------------------//

////  just got a bigger dinner table
console.log("                 GRAND DINNER INVITE LIST                ");
let grandDinner = invitationSent.splice(2, 0, "Aina", "Sana", "Hania");
invitationSent.forEach((guests) => {
  console.log(
    `Hey ${guests}! Great news — I just found a bigger dinner table, so now I can invite all of you to join me for dinner! `
  );
});
// // adding one more guest to the list
console.log(
  "                 ADDING ONE MORE GUEST IN THE START OF THE LIST                 "
);
invitationSent.unshift("Bisma");
invitationSent.forEach((guests) => {
  console.log(
    `Hey ${guests}! Great news — I just found a bigger dinner table, so now I can invite all of you to join me for dinner! `
  );
});
//   // addin in the middle of the list
console.log("ADDING ONE MORE GUEST IN THIS MIDDLE OF THE LIST");

invitationSent.splice(Math.floor(invitationSent.length / 2), 0, "Rameen");
invitationSent.forEach((guests) => {
  console.log(
    `Hey ${guests}! Great news — I just found a bigger dinner table, so now I can invite all of you to join me for dinner! `
  );
});

//   // adding one guest in the end
console.log(
  "                ONE MORE GUEST ADDED IN THE END OF THE LIST                 "
);
invitationSent.push("Fabiha");
invitationSent.forEach((guests) => {
  console.log(
    `Hey ${guests}! Great news — I just found a bigger dinner table, so now I can invite you to join me for dinner! `
  );
});

// //-----------------------------------------------:(ASSIGNMENT NO 17):----------------------------------------------//
console.log("                  UNEXPECTED CHANGE                 ");
("  Due to a delay with our new table, we can only accommodate two guests for dinner. Sorry for any inconvenience");
invitationSent.forEach((guests) => {
  console.log(
    `Hey ${guests}! Due to a delay with our new table, we can only accommodate two guests for dinner. Sorry for any inconvenience`
  );
});

// // removing one by one from the list
console.log("                 REMOVED GUEST ROM THE LIST               ");
while (invitationSent.length < 2) {
  let removed = invitationSent.pop();
}
invitationSent.forEach((guests) => {
  console.log(
    `Hey ${guests}!"Due to a delay with our new table, we can only accommodate two guests for dinner. Sorry for any inconvenience"`
  );
});
console.log("              THE ONES WHO LEFT                ");
while (invitationSent.length > 2) {
  let remained = invitationSent.pop();
}
// // 2 invitations
invitationSent.forEach((guests) => {
  console.log(`Hey ${guests}! you're still invited to the dinner`);
});
// empty list
while (invitationSent.length < 0) {
  let removed = invitationSent.pop();
}

console.log(`Empty list`);

// //-----------------------------------------------:(ASSIGNMENT NO 19):----------------------------------------------//
console.log(invitationSent.length);
