const User = require("../models/user.js");
const mongoose = require("mongoose");
const register = async (userData) => {
  console.log(userData);
  // Create an user object
  let user = new User({
    email: userData.email,
    name: userData.name,
    password: userData.hashPassword,
  });

  const saveUser = await user.save();
  if (saveUser) {
  }
  let payload = {
    id: saveUser._id,
    name: userData.name,
  };
  return jwt.sign(payload, config.TOKEN_SECRET);
};
module.exports = { register };
