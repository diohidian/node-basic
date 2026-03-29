const fs = require("node:fs/promises")

class Animal {
  constructor(name, type, habitat) {
    this.name = name;
    this.type = type;
    this.habitat = habitat;
  }

  animalSound() {
     console.log("Roarr");
     
  }

  async findAll() {
    try {
        return await fs.readFile("./database/mammals.json", {encoding:"utf-8"})
    } catch (error) {

    }
  }
}


class Mammals extends Animal {
    
}

module.exports = Mammals