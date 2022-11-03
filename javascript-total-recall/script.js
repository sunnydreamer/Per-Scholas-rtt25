// ======================================================I. Variables & Datatypes=====================================================================

/*

//A:

1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a variable? A. Reassign the variable with the equal sign
3. How do we assign an existing variable to a new variable? A. Declare a new variable and assign the existing variable name to it.
4. Remind me, what are declare, assign, and define? A. Declare: create a constant or variable. Assign: once you’ve declared a constant or variable, you can assign it a value. Define: the definition assigns a value to this allocated memory, like "let x" is "undefine".
5. What is pseudocoding and why should you do it? A. Pseudocode is a plain-text description of a piece of code or an algorithm. It gives you a clear logical pattern without being overwhelmed by the coding syntax.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A.
50% thinking and 50% coding. Thinking and planning well are critical for better code writing. (maybe 60/40)
*/

/* 

//B:

let firstVariable = "Hello World";
firstVariable = 10;
let secondVariable = firstVariable;
secondVariable = "What a lovely day!";
let yourName = "Sunny";
console.log("Hello, my name is " + yourName);
 */

/* 

//C:

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c != d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a != b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a != a + d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== "48");
 */

/* 

//D:

let animal = "sheep";
if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}
 */

/* 

//E:

let age = 15;
if (age < 16) {
  console.log("Sorry, you're too young.");
} else {
  console.log("Here are the keys!");
}
 */

// ======================================================II. Loops=====================================================================

/* 

//A: 

// 1.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2.
for (let i = 10; i <= 400; i++) {
  console.log(i);
}

// 3.
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
} 

*/

/* 

//B:

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  } else {
    console.log(i);
  }
}
 */

/* 

// C:

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0 && i !== 0) {
    console.log(`I found a ${i}. High five! Three is a crowd`);
  } else if (i % 5 === 0 && i !== 0) {
    console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0 && i !== 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  }
} 
*/

/* 

//D:

let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//   bank_account += i;
// }

// console.log(bank_account);

for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}

console.log(bank_account); */

// ======================================================III. Arrays & Control flow=====================================================================

/* 

//A:

Talk about it:
1. What are the things in an array called? Elements
2. Do Arrays guarantee those things will be in order? Yes, elements will be indexed in an array. But their actual values are not in order automatically.
3. What real-life thing could you model with an array? A menu, A students gradebook....

*/

/* 

// B:

let quotes = [
  "You can totally do this.",
  "No pressure, no diamonds.",
  "Try Again. ",
]; 
*/

/* 

// C:

const randomThings = [1, 10, "Hello", true];
let firstElement = randomThings[0];
randomThings[2] = "World";
console.log(randomThings);
 */

/* 

// D:

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
let thirdElement = ourClass[2];
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass); 

*/

/* 

// E: 

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Sunny");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray); 

*/

/* 

// F:

let number = 101;
if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
} 

*/

/* 

// G:

let number = 6;
if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}
 
*/

/* 

// H:

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);
kristynsCloset[5] = "stained knit hat";
//console.log(kristynsCloset);
let thomShirt = thomsCloset[0][0];
//console.log(thomShirt);
let thomPants = thomsCloset[1][0];
//console.log(thomPants);
let thomAcc = thomsCloset[2][1];
//console.log(thomAcc);
console.log(
  `Thom is looking fierce in a ${thomShirt}, ${thomPants} and ${thomAcc}!`
);
thomsCloset[1][2] = "Footie Pajamas";
//console.log(thomsCloset[1][2]);
 */

// ======================================================IV. Functions=====================================================================

/* 

// B:

const printCool = (name) => {
  return `${name} is cool`;
};

console.log(printCool("Captain Reynolds")); 

*/

/* 
// C:

const calculateCube = (num) => {
  return Math.pow(num, 3);
};
console.log(calculateCube(5));
 
*/

/* 

// D:

const isVowel = (char) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let formatChar = char.toLowerCase();
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === formatChar) {
      return true;
    }
  }
  return false;
};

console.log(isVowel("O"));
 
*/

/*

// E:

const getTwoLengths = (str1, str2) => {
  return [str1.length, str2.length];
};

console.log(getTwoLengths("Hank", "Hippopopalous"));
 
*/

/*

// F:

const getMultipleLengths = (arr) => {
  let newArray = [];
  arr.forEach((element) => {
    newArray.push(element.length);
  });
  return newArray;
};

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
 
*/

/* 

// G:

const maxOfThree = (num1, num2, num3) => {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }

  if (num3 > max) {
    max = num3;
  }

  return max;
};

console.log(maxOfThree(10, 9, 121));
 
*/

/* 

// H:

const printLongestWord = (arr) => {
  let longest = "";
  arr.forEach((element) => {
    if (element.length > longest.length) {
      longest = element;
    }
  });

  return longest;
};

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);
 
*/

// ======================================================IV. Objects =====================================================================

/* 

// A:

const user = {
  name: "Sunny",
  email: "122@gmail.com",
  age: 12,
  purchased: [],
};

// B:

user.email = "243@gmail.com";
user.age++;

// C:

user["location"] = "1493 street";

// D:

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

// E:

user.friend = {
  name: "Rabbit",
  age: 27,
  location: "Fuzhou",
  purchased: [],
};

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

// F:

user.purchased.forEach((element) => {
  console.log(element);
});

user.friend.purchased.forEach((element) => {
  console.log(element);
});

// G:

const updateUser = () => {
  user.age++;
  user.name = user.name.toUpperCase();
};

// updateUser();
// console.log(user);

const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
};

oldAndLoud(user);
// console.log(user);
 
*/

// ======================================================Cat Combinator =====================================================================

const cat1 = {
  name: "Nini",
  breed: "Domestic",
  age: 3,
};

const cat2 = {
  name: "Keke",
  breed: "American Curl ",
  age: 5,
};

const combineCats = (cat1, cat2) => {
  let babycat = {
    name: cat1.name + cat2.name,
    age: 1,
    breed: cat1.breed + "-" + cat2.breed,
  };

  return babycat;
};

//console.log(combineCats(cat1, cat2));

console.log(
  combineCats(
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
  )
);
