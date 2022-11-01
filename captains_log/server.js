const express = require("express");
const mongoose = require("mongoose");
const Log = require("./models/logs");
const methodOverride = require("method-override");

const app = express();

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Set up body parser
app.use(express.urlencoded({ extended: false }));

// Set up method override
app.use(methodOverride("_method"));

// Set up Mongoose
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Middleware

// app.use((req, res, next) => {
//   console.log("I am only here, for the routes");
//   next();
// });

// #1 Index

app.get("/logs", (req, res) => {
  Log.find({}, (err, allLogs) => {
    console.log(err);
    res.render("Index", {
      logs: allLogs,
    });
  });
});
// #2 New Route
app.get("/logs/new", (req, res) => {
  res.render("New", {});
});

// #3 Show Route
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    console.log(err);
    console.log("Found", foundLog);
    res.render("Show", {
      log: foundLog,
    });
  });
});

// #4 Create Route

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  Log.create(req.body, (err, createdLog) => {
    console.log(err);
    console.log("Just Added:", createdLog);
  });

  res.redirect("/logs");
});

// #5 Edit Route
app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    console.log(err);
    if (!err) {
      res.render("Edit", { log: foundLog });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// #6 PUT/PATCH
app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    console.log(err);
    console.log(updatedLog);
    res.redirect(`/logs/${req.params.id}`);
  });
});

// #7 Delete Route
app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

// Seeds*
app.get("/seed", (req, res) => {
  Log.create(
    [
      {
        title: "Captain",
        entry: "Let us go",
        shipIsBroken: false,
      },
      {
        title: "Engineer",
        entry: "Water is in!",
      },
      {
        title: "Cook",
        entry: "Food is delicious",
        shipIsBroken: false,
      },
    ],
    (err, data) => {
      console.log(err);
      res.redirect("/new");
    }
  );
});

app.listen(3000, () => {
  console.log("Listening to the port 3000");
});
