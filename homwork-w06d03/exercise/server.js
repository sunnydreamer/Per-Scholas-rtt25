const express = require("express");
const app = express();

app.get("/greeting/:name", (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseInt(req.params.total);
  const tipPercentage = parseInt(req.params.tipPercentage);

  let tip = {
    answer: (total * tipPercentage) / 100,
  };
  res.send("" + tip.answer);
});

app.get("/magic/:question", (req, res) => {
  const response = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let randomNum = Math.floor(Math.random() * response.length);

  res.send(response[randomNum]);
});

// Fibonnaci

app.get("/fibonnaci/:number", (req, res) => {
  const number = req.params.number;
  //check if it is perfect square
  const isPerfectSquare = (x) => {
    let root = Math.sqrt(x);
    if (Number.isInteger(root)) {
      return true;
    } else {
      return false;
    }
  };

  const isFinbonnaci = (num) => {
    let situation1 = isPerfectSquare(5 * num * num + 4);
    let situation2 = isPerfectSquare(5 * num * num - 4);
    return situation1 || situation2;
  };

  if (isFinbonnaci(number)) {
    res.send("Very good. It is Fibonacci.");
  } else {
    res.send("I can tell this is not a fibonacci number.");
  }
});

app.listen(3000, () => {});
