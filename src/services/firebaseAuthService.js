const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, getDoc, doc } = require("firebase/firestore");

const userConverter = require("../converters/user");

class FirebaseAuthService {
  #app;
  #auth;
  #db;

  constructor(app) {
    this.#app = app;
    this.#auth = getAuth(this.#app);
    this.#db = getFirestore(this.#db);
  }

  async logIn(email, password) {
    await signInWithEmailAndPassword(this.#auth, email, password);
  }

  async getUser() {
    const user = this.#auth.currentUser;
    if (!user) {
      return null;
    }

    const docRef = doc(this.#db, "users", user.uid).withConverter(
      userConverter,
    );
    const snapshot = await getDoc(docRef);

    return snapshot.data();
  }
}

module.exports = FirebaseAuthService;
