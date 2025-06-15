const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Authorization header missing",
    });
  }

  const tokenParts = authHeader.split(" ");
  
  
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(401).json({
      success: false,
      message: "Invalid token format.",
    });
  }

  const token = tokenParts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.decoded = decoded;
    next();
  } catch (error) {
    // Handle specific JWT errors
    let message = "Invalid token";

    if (error.name === "TokenExpiredError") {
      message = "Token expired";
    } else if (error.name === "JsonWebTokenError") {
      message = "Malformed token";
    }

    return res.status(401).json({
      success: false,
      message,
      error: error.name,
    });
  }
};


module.exports =  {verifyToken}