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
}

module.exports = Configuration;
