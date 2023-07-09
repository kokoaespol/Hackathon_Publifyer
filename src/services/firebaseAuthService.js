const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, getDoc, doc, setDoc } = require("firebase/firestore");

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

  async logIn(email, password, authToken) {
    const userCreds = await signInWithEmailAndPassword(
      this.#auth,
      email,
      password,
    );
    const tokenDocRef = doc(this.#db, "tokens", authToken);
    await setDoc(tokenDocRef, { uid: userCreds.user.uid });
  }

  // TODO: Expire cookies.
  async getUser(authToken) {
    const tokenDocRef = doc(this.#db, "tokens", authToken);
    const tokenSnapshot = await getDoc(tokenDocRef);

    const userId = tokenSnapshot.data().uid;

    const docRef = doc(this.#db, "users", userId).withConverter(userConverter);
    const snapshot = await getDoc(docRef);

    return snapshot.data();
  }
}

module.exports = FirebaseAuthService;
