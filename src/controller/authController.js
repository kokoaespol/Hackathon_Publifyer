const express = require("express");

function authController(authService) {
  const router = express.Router();

  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    await authService.logIn(email, password);
    const user = await authService.getUser();
    res.json(user);
  });

  return router;
}

function authMiddleware(authService) {
  return async (req, res, next) => {
    const user = await authService.getUser();

    if (!user) {
      return res.status(401).end();
    }

    res.locals.user = user;
    next();
  };
}

module.exports = {
  authMiddleware,
  authController,
};
