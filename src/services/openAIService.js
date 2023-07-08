const { OpenAIApi } = require("openai");

export default class OpenAIService {
  #openai;

  constructor(configuration) {
    this.#openai = new OpenAIApi(configuration);
  }

  async generateVideoScript(videoMeta) {
    const completion = await this.#openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: `
        Hello, chat. Please give me text to advertise 
        black lives matter on twitter. Include emojis.
      `,
    });
    console.log(completion);
  }
}
