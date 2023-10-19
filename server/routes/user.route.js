const { Router } = require("express");
const { UserModel } = require("../model/user.model");

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  try {
    await UserModel.create(req.body);
    res.status(200).send("user route");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("user route something wrong");
  }
});

module.exports = userRouter;
