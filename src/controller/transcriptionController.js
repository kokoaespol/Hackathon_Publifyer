const express = require("express");
const fs = require("node:fs");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "/tmp/uploads"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

function transcriptionController(openAIService) {
  const router = express.Router();

  router.post("/", upload.single("video"), async (req, res) => {
    const fileStream = await fs.createReadStream(req.file.path);
    const transcription = await openAIService.transcribeVideo(fileStream);
    return res.status(200).json({
      status: 200,
      transcription: transcription.data.text,
    });
  });

  return router;
}

module.exports = transcriptionController;
