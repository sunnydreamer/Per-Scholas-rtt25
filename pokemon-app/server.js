const express = require("express");
const pokemon = require("./models/pokemon.js");
const app = express();
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Add Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon/", (req, res) => {
  res.render("Index.jsx", { pokemons: pokemon });
});

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id],
    id: req.params.id,
  });
});

app.get("/pokemon/:id/edit", (req, res) => {
  res.render("Edit", {
    pokemon: pokemon[req.params.id],
    id: req.params.id,
  });
});

app.get("/pokemon/:id/delete", (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect("/pokemon/");
});

app.post("/pokemon/:id", (req, res) => {
  if (req.body.name) {
    pokemon[req.params.id].name = req.body.name;
  }
  if (req.body.img) {
    pokemon[req.params.id].img = req.body.img;
  }

  res.redirect("/pokemon/");
});

app.listen(port, () => {
  console.log("Listening to port 3000");
});
