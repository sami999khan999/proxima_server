const User = require("../models/useModel");

// use login
const loginUse = async (req, res) => {
  res.json({ message: "login" });
};

// use signup
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUse, signupUser };
