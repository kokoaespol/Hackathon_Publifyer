const User = require("../models/user");

const userConverter = {
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data();
    return new User({
      uid: snapshot.id,
      name: data.name,
      email: data.email,
      twitterUsername: data.twitterUsername,
      instagramUsername: data.instagramUsername,
      tikTokUsername: data.tikTokUsername,
    });
  },
  toFirestore: (user) => {
    return {
      name: user.name,
      email: user.email,
      twitterUsername: user.twitterUsername || null,
      instagramUsername: user.instagramUsername || null,
      tikTokUsername: user.tikTokUsername || null,
    };
  },
};

module.exports = userConverter;
