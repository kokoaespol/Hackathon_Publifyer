const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Configuration = require("./config");
const configuration = new Configuration();

const openAIConfiguration = configuration.openAIConfiguration;
const OpenAIService = require("./services/openAIService");
const openAIController = require("./controller/openAIController");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  "/api/v1/genies",
  openAIController(new OpenAIService(openAIConfiguration)),
);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: 500,
    error: "Something broke!",
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
