const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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

const FirebaseAuthService = require("./services/firebaseAuthService");
const authService = new FirebaseAuthService(firebaseApp);
const {
  authMiddleware,
  authController,
} = require("./controller/authController");

const FirebaseGenieService = require("./services/firebaseGenieService");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use("/api/v1/auth", authController(authService));

app.use(
  "/api/v1/users",
  usersController(new FirebaseUsersService(firebaseApp)),
);

app.use(
  "/api/v1/genies",
  authMiddleware(authService),
  genieController(
    openAIService,
    new FirebaseGenieService(firebaseApp),
    authService,
  ),
);

app.use(
  "/api/v1/transcription",
  authMiddleware(authService),
  transcriptionController(openAIService),
);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: 500,
    error: "Something broke!",
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
