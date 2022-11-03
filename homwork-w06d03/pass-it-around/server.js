// - On the home page (`get "/"`), users should see:
//   - "99 Bottles of beer on the wall"
//   - a link that says "take one down, pass it around"
//   - this should link to `/98`, where the number represents the number of bottles left.
// - When a number is given in the url (`get "/:number_of_bottles"`), users should see:
//   - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
//   - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
// - If there are 0 bottles left, do not show a link to "take one down"
//   - Add a link to start over, which directs the user back to the home page.

// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   res.send(`<h1>99 Bottles of beer on the wall</h1>
//     <a href="/98"><h2>take one down, pass it around</h2></a>`);
// });

// app.get("/:number_of_bottles", (req, res) => {
//   const currentNum = req.params.number_of_bottles;
//   const nextNum = req.params.number_of_bottles - 1;
//   if (currentNum === "0") {
//     res.send(`<h1>${currentNum} Bottles of beer on the wall</h1>
//     <a href="/"><h2>Start Over</h2>`);
//   } else {
//     res.send(`<h1>${currentNum} Bottles of beer on the wall</h1>
//     <a href="/${nextNum}"><h2>take one down, pass it around</h2></a>`);
//   }
// });

// app.listen(3000, () => {});

//====================================================bonus==========================================================

/*
99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
*/

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const currentNum = 99;
  const randomNum = Math.floor(Math.random() * 3);
  const nextNum = currentNum - 1 + randomNum;
  res.send(`<h1>${currentNum} little bugs in the code</h1>
  <h2>${currentNum} little bugs </br> Take one down </br>
  Patch it around</h2>
    <a href="/${nextNum}"><h2>${nextNum} bugs in the code</h2></a>`);
});

app.get("/:number_of_bugs", (req, res) => {
  const currentNum = req.params.number_of_bugs;
  const randomNum = Math.floor(Math.random() * 3);
  const nextNum = currentNum - 1 + randomNum;
  if (currentNum === "0") {
    res.send(`<h1>No bugs in the code</h1>
    <a href="/"><h2>Go back to the start</h2></a>`);
  } else {
    res.send(`<h1>${currentNum} little bugs in the code</h1>
  <h2>${currentNum} little bugs </br> Take one down </br>
  Patch it around</h2>
    <a href="/${nextNum}"><h2>${nextNum} bugs in the code</h2></a>`);
  }
});

app.listen(3000, () => {});
