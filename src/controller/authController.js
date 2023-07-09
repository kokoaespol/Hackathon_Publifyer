const crypto = require("crypto");
const express = require("express");

function authController(authService) {
  const router = express.Router();

  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const cookie = crypto.randomBytes(16).toString("hex");
    await authService.logIn(email, password, cookie);
    const user = await authService.getUser(cookie);
    res.cookie("GENIE_SESSION", cookie).json(user);
  });

  return router;
}

function authMiddleware(authService) {
  return async (req, res, next) => {
    if (!req.cookies || !req.cookies.GENIE_SESSION) {
      return res.status(401).end();
    }

    const user = await authService.getUser(req.cookies.GENIE_SESSION);

    if (!user) {
      return res.status(401).end();
    }

    res.locals.user = user;
    return next();
  };
}

module.exports = {
  authMiddleware,
  authController,
};
