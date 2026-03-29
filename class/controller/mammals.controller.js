const MammalsService = require("../service/mammals.service")

class MammalsController {
    constructor() {
        this.mammalsService = new MammalsService();
    }

    getSound () {
        this.mammalsService.getSound()
    }
}

module.exports = MammalsController