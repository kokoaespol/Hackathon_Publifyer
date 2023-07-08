/**
 * Metadata for creating a video script.
 */
class VideoMeta {
  constructor({
    brand,
    subject,
    idea,
    targetAudience,
    keywords,
    durationInSeconds,
  }) {
    this.brand = brand;
    this.subject = subject;
    this.idea = idea;
    this.targetAudience = targetAudience;
    this.keywords = keywords;
    this.durationInSeconds = durationInSeconds;
  }
}

module.exports = VideoMeta;
