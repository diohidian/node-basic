const Mammals = require("../model/animal.model")

class MammalsService {
    constructor() {
        this.mammalsModel = new Mammals
    }

    getSound() {
        this.mammalsModel.animalSound()
    }

    async getAll() {
        return await this.mammalsModel.findAll()
    }
}

module.exports = MammalsService