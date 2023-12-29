const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// signup
userSchema.statics.signup = async function (name, email, password) {
  // check if the fields are empty or not
  if (!name || !email || !password) {
    throw Error("All fields mush be fields");
  }

  // check if the email is valid
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  // check if the password is valid
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  // encrypt password or hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create an user
  const user = await this.create({ name, email, password: hash });

  return user;
};

// login
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be fields");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
