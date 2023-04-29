require("dotenv").config();
module.exports = {
  port: process.env.PORT || 3001,
  database: process.env.MONGO_URL,
};
