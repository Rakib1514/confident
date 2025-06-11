const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const userSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ uid: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const { password: _, _v, ...userSafe } = user.toObject();

    res.status(200).json({
      success: true,
      token,
      user: userSafe,
    });
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const userSignUp = async (req, res) => {
  const user = req.body;

  try {
    const newUser = await User.create(user);
    res.status(200).json({
      success: true,
      message: "Successfully Registered. Please sign-in",
    });
  } catch (error) {
    console.log("ERROR", error);

    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { userSignIn, userSignUp };
