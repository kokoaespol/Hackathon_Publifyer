const { getFirestore, doc, setDoc } = require("firebase/firestore");

const genieConverter = require("../converters/genie");

class FirebaseGenieService {
  #app;
  #db;

  constructor(app) {
    this.#app = app;
    this.#db = getFirestore(this.#app);
  }

  async createGenie(genie, userId) {
    const docRef = doc(
      this.#db,
      "users",
      userId,
      "genies",
      genie.id,
    ).withConverter(genieConverter);
    await setDoc(docRef, genie);
  }
}

module.exports = FirebaseGenieService;
