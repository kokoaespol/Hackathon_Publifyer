const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Configuration = require("./config");
const configuration = new Configuration();

const openAIConfiguration = configuration.openAIConfiguration;
const OpenAIService = require("./services/openAIService");
const genieController = require("./controller/genieController");

const openAIService = new OpenAIService(openAIConfiguration);

const { initializeApp } = require("firebase/app");
const firebaseApp = initializeApp(configuration.firebaseConfiguration);

const FirebaseUsersService = require("./services/firebaseUsersService");
const usersController = require("./controller/usersController");

const transcriptionController = require("./controller/transcriptionController");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  "/api/v1/users",
  usersController(new FirebaseUsersService(firebaseApp)),
);

app.use("/api/v1/genies", genieController(openAIService));

app.use("/api/v1/transcription", transcriptionController(openAIService));

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: 500,
    error: "Something broke!",
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
