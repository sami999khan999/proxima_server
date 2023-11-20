const express = require("express");
require("dotenv").config();
const projectRouter = require("./routes/projectRoute");

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// routes
app.use("/api/projects/", projectRouter);

// listening for reqiest
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
