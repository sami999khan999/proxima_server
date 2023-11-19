const express = require("express");
require("dotenv").config();

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// listening for reqiest
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
