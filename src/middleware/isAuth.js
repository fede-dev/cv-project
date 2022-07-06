const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(400).json("No session here");
  }
};

module.exports = {
  isAuth,
};
