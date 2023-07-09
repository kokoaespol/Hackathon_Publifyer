class User {
  constructor(args) {
    this.uid = args.uid;
    this.name = args.name;
    this.email = args.email;
    this.password = args.password;

    if (args.twitterUsername) {
      this.twitterUsername = args.twitterUsername;
    }

    if (args.instagramUsername) {
      this.instagramUsername = args.instagramUsername;
    }

    if (args.tikTokUsername) {
      this.tikTokUsername = args.tikTokUsername;
    }
  }
}

module.exports = User;
