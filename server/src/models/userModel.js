const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already in use"],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
    image: {
      type: String,
      default: "https://i.ibb.co/th2hZBc/a.png",
    },

    firstName: String,
    lastName: String,
  },
  { timestamps: true }
);

// Hash the password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
