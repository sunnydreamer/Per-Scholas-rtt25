const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  title: { type: String, require: true },
  entry: { type: String, require: true },
  shipIsBroken: { type: Boolean, default: true },
});

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;
