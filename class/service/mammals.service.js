const Mammals = require("../model/animal.model")

class MammalsService {
    constructor() {
        this.mammalsModel = new Mammals
    }

    getSound() {
        this.mammalsModel.animalSound()
    }
}

module.exports = MammalsService