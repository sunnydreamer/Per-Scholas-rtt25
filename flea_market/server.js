// Set up express
const express = require("express");
const app = express();

//Import modules
const Men = require("./models/men");
const seedWomen = require("./models/seedWomen");
const seedMen = require("./models/seedMen");

// Set up body parser
app.use(express.urlencoded({ extended: false }));

// Set up css
app.use(express.static("public"));

// Set up Mongoose
const mongoose = require("mongoose");
const Women = require("./models/women");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Set up shopping cart
const cart = [];

// Index Route

app.get("/index", (req, res) => {
  //refresh shopping cart

  Men.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("index", {
      products: allProducts,
      cart: cart,
    });
  });
});

// Women Route
app.get("/women", (req, res) => {
  //refresh shopping cart

  Women.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("Women", {
      products: allProducts,
      cart: cart,
    });
  });
});

// Women Admin Route
app.get("/women/admin", (req, res) => {
  //refresh shopping cart

  Women.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("WomenAdmin", {
      products: allProducts,
      cart: cart,
    });
  });
});

// Men Route
app.get("/men", (req, res) => {
  //refresh shopping cart

  Men.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("Men", {
      products: allProducts,
      cart: cart,
    });
  });
});

// Admin Route
app.get("/admin", (req, res) => {
  //refresh shopping cart

  Women.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("Admin", {
      products: allProducts,
      cart: cart,
    });
  });
});

// Cart Route
// app.get("/cart", (req, res) => {
//   res.send(cart);
// });

// app.post("/cart/:id", (req, res) =Men.findById(req.params.id, (err, foundProduct) => {
//     if (!err) {
//       cart.push(foundProduct);
//       res.redirect("/index");

//       // cart[cart.length - 1]["quantity"] = 1;

//       // res.redirect("/index");
//     } else {
//       res.send({ msg: err.message });
//     }
//   });
// });

// Seed Route

app.get("/seed", (req, res) => {
  Men.create(seedMen);
  Women.create(seedWomen);
  res.redirect("/index");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
