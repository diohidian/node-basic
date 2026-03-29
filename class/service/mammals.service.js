const Mammals = require("../model/animal.model");

class MammalsService {
  constructor() {
    this.mammalsModel = new Mammals();
  }

  getSound() {
    this.mammalsModel.animalSound();
  }

  async getAll() {
    return await this.mammalsModel.findAll();
  }

  async store(body) {
    if (body.type == "Mammals") {
      await this.mammalsModel.save(body);
    } else {
      console.log("sorry this animal was not a mammals");
    }
  }
}

module.exports = MammalsService;
