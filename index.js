const MammalsController = require("./class/controller/mammals.controller")

function main() {
    const mammalsController = new MammalsController()
    mammalsController.getSound()
}

main()