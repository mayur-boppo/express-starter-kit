const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_HOST: process.env.MONGO_DB || "mongodb://localhost:27017/auth",
  TOKEN_SECRET:
    process.env.TOKEN_SECRET || "thats-the-seccret-not-to-be-disclose",
  PORT: process.env.PORT || 3000,
};
