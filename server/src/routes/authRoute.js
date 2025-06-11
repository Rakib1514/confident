const express = require("express");
const { userSignIn, userSignUp } = require("../controllers/authController");

const router = express.Router();

router.post("/sign-in", userSignIn);
router.post("/sign-up", userSignUp);

module.exports = router;
