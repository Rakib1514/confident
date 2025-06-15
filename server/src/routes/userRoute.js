const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { getUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", verifyToken, getUser);

module.exports = router;
