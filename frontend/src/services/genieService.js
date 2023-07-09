export default class GenieService {
  constructor() {}

  async createGenie() {}

  async findAll() {
    return await fetch("http://localhost:3000/api/v1/genies", {
      credentials: "include",
    });
  }
}
