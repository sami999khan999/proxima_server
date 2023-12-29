const User = require("../models/useModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "7d" });
};

// use login
const loginUse = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    // create token
    const token = createToken(user._id);
    const name = user.name;

    res.status(200).json({ name, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// use signup
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    // create token
    const token = createToken(user._id);

    res.status(200).json({ name, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUse, signupUser };
