// Exercise 1

// let num = -3;
// if (num === 0) {
//   console.log("num is 0");
// } else if (num > 0) {
//   console.log("num is positive");
// } else {
//   console.log("num is negative");
// }

// Exercise 2

// let age = 18;
// if (age >= 18) {
//   console.log("Logged in successfully!");
// } else {
//   console.log("Access denied!");
// }

// Exercise 3

// let num = -2;
// if (num > 100) {
//   console.log("num is greater than 100");
// } else {
//   if (num === 100) {
//     console.log("num is 100");
//   } else if (num > 0) {
//     console.log("num is positive but less than 100");
//   } else if (num === 0) {
//     console.log("num is 0");
//   } else {
//     console.log("num is negative");
//   }
// }

// Evercise 4

// let grade = 89;
// if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 55) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// Exercise 5
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Exercise 6
// for (let i = 1; i <= 9; i += 2) {
//   console.log(i);
//   if (i === 9) {
//     for (let j = 2; j <= 10; j += 2) {
//       console.log(j);
//     }
//   }
// }

// Exercise 7
// for (let i = 6; i <= 60; i += 3) {
//   console.log(i);
// }

// Exercise 8 (?? More solutions ??)

// for (let i = 1; i <= 7; i++) {
//   let bricks = [];
//   for (let j = 0; j < i; j++) {
//     bricks.push("#");
//   }
//   console.log(bricks.join(""));
// }

// Exercise 9

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log("even");
//   } else {
//     let divisible = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         divisible += 1;
//       }
//     }
//     if (divisible === 2 && i > 3) {
//       console.log("Prime");
//     } else {
//       console.log("odd");
//     }
//   }
// }
