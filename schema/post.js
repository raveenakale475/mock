const mongoose = require("mongoose");
require("dotenv").config();

const postSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  location: String,
  postedAt: Date,
  price: Number,
});

const postModel = mongoose.model("flight", postSchema);

module.exports = {
  postModel,
};
