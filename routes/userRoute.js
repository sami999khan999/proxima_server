const express = require("express");
const { loginUse, signupUser } = require("../controllers/useController");

const router = express.Router();

// longin
router.post("/login", loginUse);

// signup
router.post("/signup", signupUser);

module.exports = router;
