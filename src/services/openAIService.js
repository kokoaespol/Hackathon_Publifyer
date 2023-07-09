const { OpenAIApi } = require("openai");

class OpenAIService {
  #openai;

  constructor(configuration) {
    this.#openai = new OpenAIApi(configuration);
  }

  #videoMetaToText(videoMeta) {
    return `
      La meta es publicitar "${videoMeta.subject}" para la marca ${
        videoMeta.brand
      }.
      El video necesita durar alrededor de ${
        videoMeta.durationInSeconds
      } segundos y 
      debe incluir las siguientes palabras claves: ${videoMeta.keywords.join(
        "",
      )}.
      Además, ten presente que la audiencia objetivo es ${
        videoMeta.targetAudience
      }.
      Finalmente, esto es lo que se me ha ocurrido hasta ahora: ${
        videoMeta.idea
      }.
    `;
  }

  async recommendAmbience(videoMeta) {
    const completion = await this.#openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Recomiéndame un ambiente para un video. ${this.#videoMetaToText(
            videoMeta,
          )}`,
        },
      ],
    });
    return completion.data.choices[0].message.content;
  }

  async generateVideoScript(videoMeta) {
    const completion = await this.#openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Escribe el guión para un video. ${this.#videoMetaToText(
            videoMeta,
          )}`,
        },
      ],
    });
    return completion.data.choices[0].message.content;
  }

  async transcribeVideo(videoFile) {
    const transcription = await this.#openai.createTranscription(
      videoFile,
      "whisper-1",
    );
    return transcription;
  }
}

module.exports = OpenAIService;
