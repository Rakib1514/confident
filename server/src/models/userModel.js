const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: [true, "email already in use"],
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
  },
  { timestamps: true }
);

// Hash the password before save
userSchema.pre("save", async (next) => {
  if (!this.isModified(password)) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
