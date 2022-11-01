// Set up express
const express = require("express");
const app = express();

//Import modules
const Men = require("./models/men");
const Women = require("./models/women");
const seedWomen = require("./models/seedWomen");
const seedMen = require("./models/seedMen");

// Set up body parser
app.use(express.urlencoded({ extended: false }));

// Set up method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Set up css
app.use(express.static("public"));

// Set up Mongoose
const mongoose = require("mongoose");

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
  Women.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("Women", {
      products: allProducts,
      cart: cart,
    });
  }).sort({ createdAt: -1 });
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

// Women Admin Route
app.get("/women/admin", (req, res) => {
  Women.find({}, (err, allProducts) => {
    res.render("WomenAdmin", {
      products: allProducts,
      cart: cart,
    });
  });
});

app.post("/women/admin", (req, res) => {
  if (req.body.isUsed === "on") {
    req.body.isUsed = true;
  } else {
    req.body.isUsed = false;
  }
  Women.create(req.body, (err, createdProduct) => {
    console.log(err);
    console.log("Just Added : ", createdProduct);
  });
  res.redirect("/women/admin");
});

// Men Admin Route
app.get("/men/admin", (req, res) => {
  Men.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("MenAdmin", {
      products: allProducts,
      cart: cart,
    });
  });
});

app.post("/men/admin", (req, res) => {
  if (req.body.isUsed === "on") {
    req.body.isUsed = true;
  } else {
    req.body.isUsed = false;
  }
  Men.create(req.body, (err, createdProduct) => {
    console.log(err);
    console.log("Just Added : ", createdProduct);
  });
  res.redirect("/men/admin");
});

// Women Delete
app.delete("/women/admin/:id", (req, res) => {
  console.log(req.params.id);
  Women.findByIdAndRemove(req.params.id, (err, data) => {
    console.log(err);
    res.redirect("/women/admin");
  });
});

// Men Delete
app.delete("/men/admin/:id", (req, res) => {
  console.log(req.params.id);
  Men.findByIdAndRemove(req.params.id, (err, data) => {
    console.log(err);
    res.redirect("/men/admin");
  });
});

// women put patch
app.put("/women/admin/:id", (req, res) => {
  console.log(req.params.id);
  if (req.body.isUsed === "on") {
    req.body.isUsed = true;
  } else {
    req.body.isUsed = false;
  }
  Women.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
    console.log(err);
    console.log(updatedProduct);
    res.redirect("/women/admin");
  });
});

// men put patch
app.put("/men/admin/:id", (req, res) => {
  console.log(req.params.id);
  if (req.body.isUsed === "on") {
    req.body.isUsed = true;
  } else {
    req.body.isUsed = false;
  }
  Men.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
    console.log(err);
    console.log(updatedProduct);
    res.redirect("/men/admin");
  });
});

// Women Edit
app.get("/women/admin/:id/edit", (req, res) => {
  Women.findById(req.params.id, (err, foundProduct) => {
    console.log(err);
    if (!err) {
      res.render("WomenEdit", {
        product: foundProduct,
        cart: cart,
        //pass in the foundStudent so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Men Edit
app.get("/men/admin/:id/edit", (req, res) => {
  Men.findById(req.params.id, (err, foundProduct) => {
    console.log(err);
    if (!err) {
      res.render("MenEdit", {
        product: foundProduct,
        cart: cart,
        //pass in the foundStudent so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Women New Route
app.get("/women/admin/new", (req, res) => {
  Women.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("WomenNew", {
      products: allProducts,
      cart: cart,
    });
  });
});

// Men New Route
app.get("/men/admin/new", (req, res) => {
  Men.find({}, (err, allProducts) => {
    // console.log(err);
    res.render("MenNew", {
      products: allProducts,
      cart: cart,
    });
  });
});

// Cart Route
app.get("/cart", (req, res) => {
  res.render("Cart", { cart: cart });
  console.log(cart);
});

app.post("/women/cart/:id", (req, res) => {
  Women.findById(req.params.id, (err, foundProduct) => {
    if (!err) {
      cart.push(foundProduct);
      res.redirect("/women");
    } else {
      res.send("not in womens");
    }
  });
});

app.post("/men/cart/:id", (req, res) => {
  Men.findById(req.params.id, (err, foundProduct) => {
    if (!err) {
      cart.push(foundProduct);
      res.redirect("/men");
    } else {
      res.send("not in mens");
    }
  });
});

// Seed Route
app.get("/seed", (req, res) => {
  Men.create(seedMen);
  Women.create(seedWomen);
  res.redirect("/index");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
