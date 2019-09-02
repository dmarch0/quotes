module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  if (authHeader !== process.env.KEY) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  return next();
};
