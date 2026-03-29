const MammalsController = require("./class/controller/mammals.controller");

async function main() {
  try {
    const mammalsController = new MammalsController();
    mammalsController.getSound();
    const mammals = await mammalsController.getAll();
    console.log(mammals);
    const horse = {name: "horse", type: "Mammals", habitat: "farm"}
    await mammalsController.store(horse)
    
    
    
  } catch (error) {
    console.error(error);
  }
}

main();