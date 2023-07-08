const express = require("express");
const VideoMeta = require("../models/videoMeta");

function openAIController(openAIService) {
  const router = express.Router();

  router.post("/new", async (req, res) => {
    const videoMeta = new VideoMeta(req.body);
    const guion = await openAIService.generateVideoScript(videoMeta);
    const ambiente = await openAIService.recommendAmbience(videoMeta);
    return res.json({
      status: "200",
      ambiente,
      guion,
    });
  });

  return router;
}

module.exports = openAIController;
