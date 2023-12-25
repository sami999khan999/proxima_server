const User = require("../models/useModel");

// use login
const loginUse = async (req, res) => {
  res.json({ message: "login" });
};

// use signup
const signupUser = async (req, res) => {
  res.json({ message: "signup" });
};

module.exports = { loginUse, signupUser };
