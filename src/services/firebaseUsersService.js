const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, setDoc, doc } = require("firebase/firestore");

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

class FirebaseUsersService {
  #auth;
  #app;
  #db;

  constructor(app) {
    this.#app = app;
    this.#auth = getAuth(this.#app);
    this.#db = getFirestore(this.#app);
  }

  async createUser(user) {
    const userCreds = await createUserWithEmailAndPassword(
      this.#auth,
      user.email,
      user.password,
    );

    const docRef = doc(this.#db, "users", userCreds.user.uid).withConverter(
      userConverter,
    );
    await setDoc(docRef, user);
  }
}

module.exports = FirebaseUsersService;
