const {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} = require("firebase/firestore");

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

  async getGeniesForUser(userId) {
    const collRef = collection(
      this.#db,
      "users",
      userId,
      "genies",
    ).withConverter(genieConverter);
    const querySnapshot = await getDocs(collRef);
    const genies = [];
    querySnapshot.forEach((doc) => genies.push(doc.data()));
    return genies;
  }
}

module.exports = FirebaseGenieService;
