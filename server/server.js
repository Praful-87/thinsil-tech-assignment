const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");

const app = express();
app.use(express.json());
// Connect to MongoDB

// Define a route
app.get("/", (req, res) => {
  res.send("Express server with MongoDB is running.");
});
app.use("/user", userRouter);
app.use("/products", productRouter);

const port = process.env.PORT || 8000;
app.listen(port, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/thinsil", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
