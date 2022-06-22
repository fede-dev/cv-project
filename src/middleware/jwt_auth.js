const jwt = require("jsonwebtoken");
const { error_handler } = require("./error_handler");

const verify_token = (req, res, next) => {
  const bearerHeader = req.header("Authorization");
  if (bearerHeader) {
    jwt.verify(bearerHeader, process.env.SECRET_KEY, (error, tokenInfo) => {
      if (error) {
        res
          .status(403)
          .json(error_handler(error, "An Error on Verification", 403));
        return;
      } else {
        req.user = tokenInfo.user;
      }

      next();
    });
  } else {
    res.status(403).json({ message: "Acceso prohibido" });
  }
};

module.exports = verify_token;
