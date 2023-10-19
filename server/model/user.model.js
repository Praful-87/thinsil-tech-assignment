const mongoose = require("mongoose");
const userScema = mongoose.Schema(
  {
    name: { type: String },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userScema);

module.exports = { UserModel };
