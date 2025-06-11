const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

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

    const { password: _, __v, ...userSafe } = user.toObject();

    res.status(200).json({
      success: true,
      token,
      user: userSafe,
    });
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { userSignIn };
