const express = require("express");
const mongoose = require("mongoose");
const Log = require("./models/logs");

const app = express();

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Set up body parser
app.use(express.urlencoded({ extended: false }));

// Set up Mongoose
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Index

app.get("/logs", (req, res) => {
  Log.find({}, (err, allLogs) => {
    console.log(err);
    res.render("Index", {
      logs: allLogs,
    });
  });
});

// New Route
app.get("/logs/new", (req, res) => {
  res.render("New", {});
});

// Create Route

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

  res.send(req.body);

  // res.redirect("/new");
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
