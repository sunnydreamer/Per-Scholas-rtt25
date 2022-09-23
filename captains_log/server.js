const express = require("express");
const app = express();

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Set up body parser
app.use(express.urlencoded({ extended: false }));

// New Route
app.get("/new", (req, res) => {
  res.render("New", {});
});

// Create Route

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Listening to the port 3000");
});
