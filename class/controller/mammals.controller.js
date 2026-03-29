class MammalsController {
    constructor(mammalsService) {
        this.mammalsService = new MammalsService();
    }

    getSound () {
        this.mammalsService.getSound()
    }
}