const fs = require("node:fs/promises");

class Animal {
  constructor(name, type, habitat) {
    this.name = name;
    this.type = type;
    this.habitat = habitat;
  }

  animalSound() {
    console.log("Roarr");
  }

  async connect() {
    const file = await fs.readFile("./database/mammals.json", {
      encoding: "utf-8",
    });
    return eval(file);
  }

  async findAll() {
    try {
      return await this.connect();
    } catch (error) {}
  }

  async save(body) {
    try {
      const data = await this.connect();
      data.push(body);
      await fs.writeFile("./database/mammals.json", JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  }
}

class Mammals extends Animal {}

module.exports = Mammals;
