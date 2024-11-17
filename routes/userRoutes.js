const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddlewear");

//router onject
const router = express.Router();

//routes
//HOME ||GET
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);
module.exports = router;
