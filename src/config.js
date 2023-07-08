const { Configuration } = require("openai");
const dotenv = require("dotenv");

export default class Config {
  constructor() {
    dotenv.config();
  }

  get openAIConfiguration() {
    return new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
}
