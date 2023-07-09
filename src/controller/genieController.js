const crypto = require("crypto");
const express = require("express");

const VideoMeta = require("../models/videoMeta");
const Genie = require("../models/genie");

function genieController(openAIService, genieService, authService) {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const user = await authService.getUser();
    const genies = await genieService.getGeniesForUser(user.uid);
    return res.status(200).json(genies);
  });

  router.post("/new", async (req, res) => {
    const videoMeta = new VideoMeta(req.body);

    const guion = await openAIService.generateVideoScript(videoMeta);
    const ambiente = await openAIService.recommendAmbience(videoMeta);

    const genieId = crypto.randomBytes(16).toString("hex");
    const genie = new Genie({ id: genieId, meta: videoMeta });

    const user = await authService.getUser();

    await genieService.createGenie(genie, user.uid);

    return res.status(201).json({
      status: 201,
      ambiente,
      guion,
    });
  });

  return router;
}

module.exports = genieController;
