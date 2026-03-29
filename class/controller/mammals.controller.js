const MammalsService = require("../service/mammals.service")

class MammalsController {
    constructor() {
        this.mammalsService = new MammalsService();
    }

    getSound () {
        this.mammalsService.getSound()
    }

    async getAll() {
        return await this.mammalsService.getAll()
    }
}

module.exports = MammalsController