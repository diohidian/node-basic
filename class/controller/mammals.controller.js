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
    
    async store(body) {
        await this.mammalsService.store(body);
    }
}

module.exports = MammalsController