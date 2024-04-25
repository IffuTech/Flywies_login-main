const mongoose = require("mongoose");


const photoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    highquality: {
      type: String,
      required: true,
      trim: true,
    },
    customSize: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("photo", photoSchema);
