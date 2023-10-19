const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

const port = process.env.PORT || 8000;
app.listen(port, async () => {
  try {
    console.log(`Server is running on port ${port}`);
    
  } catch (error) {
    console.log(error.message);
  }
});