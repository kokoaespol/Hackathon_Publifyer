const openai = require("openai");
const dotenv = require("dotenv");

class Configuration {
  constructor() {
    dotenv.config();
  }

  get openAIConfiguration() {
    return new openai.Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  get firebaseConfiguration() {
    return {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    };
  }
}

module.exports = Configuration;
