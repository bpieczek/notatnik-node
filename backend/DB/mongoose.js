const mongoose = require("mongoose");
const { database } = require("../config");

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected succesfully!");
  })
  .catch((err) => {
    console.log(err.message);
  });
