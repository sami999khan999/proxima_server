const express = require("express");
const cors = require("cors");
require("dotenv").config();
const projectRouter = require("./routes/projectRoute");
const userRouter = require("./routes/userRoute");
const mongoose = require("mongoose");

// express app
const app = express();

// port
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);

  next();
});

// routes
app.use("/api/projects/", projectRouter);
app.use("/api/user/", userRouter);

// mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for reqiest
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
