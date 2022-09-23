const express = require("express");
const app = express();

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Create New Route
app.get("/new", (req, res) => {
  res.render("New", {});
});

app.listen(3000, () => {
  console.log("Listening to the port 3000");
});
