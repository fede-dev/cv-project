const jwt = require("jsonwebtoken");
const { error_handler } = require("./error_handler");

const verify_token = (req, res, next) => {
  const header = req.header("Authorization");

  if (header) {
    jwt.verify(header, process.env.SECRET_KEY, (error, token) => {
      if (error) {
        res
          .status(403)
          .json(error_handler(error, "An Error on Verification", 403));
      } else {
        req.user = token.user;
        //console.log(token.user);
      }
      next();
    });
  } else {
    res.status(403).json({ message: "Acceso prohibido" });
  }
};

module.exports = verify_token;
