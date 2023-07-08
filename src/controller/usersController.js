const express = require("express");

const User = require("../models/user");

function usersController(usersService) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const user = new User(req.body);
      await usersService.createUser(user);
      return res.status(201).end();
    } catch (err) {
      console.error(err);
      if (err.code === "auth/weak-password") {
        return res.status(400).json({
          status: 400,
          error: "Password needs to be stronger",
        });
      } else if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({
          status: 409,
          error: "Email is already in use",
        });
      }
      return res.status(500).end();
    }
  });

  return router;
}

module.exports = usersController;
