class MammalsService {
    constructor(mammalsModel) {
        this.mammalsModel = new Mammals
    }

    getSound() {
        this.mammalsModel.animalSound()
    }
}