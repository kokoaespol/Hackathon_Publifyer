const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, setDoc, doc } = require("firebase/firestore");

const userConverter = require("../converters/user");

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
