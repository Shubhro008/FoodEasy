const mongoose = require("mongoose");
const config = require("config");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err.message));
};

module.exports = connectDB;