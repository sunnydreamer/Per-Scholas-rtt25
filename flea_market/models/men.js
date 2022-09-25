const mongoose = require("mongoose");

const menSchema = new mongoose.Schema(
  {
    productImg: {
      type: String,
      default:
        "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0",
    },
    productName: { type: String, require: true },
    price: { type: Number, requires: true },
    seller: { type: String, requires: true },
    isUsed: Boolean,
  },
  { timestamps: true }
);

const Men = mongoose.model("Men", menSchema);
module.exports = Men;
