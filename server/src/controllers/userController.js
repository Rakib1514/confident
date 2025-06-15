const User = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.decoded.uid);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password: _, __v, ...safeUser } = user.toObject();
    res.json({ success: true, user: safeUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getUser };
