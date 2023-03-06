const Developer = require("./oopLecture")

class JuniorDeveloper extends Developer{
    constructor(name, health, lang, iq){
        super(name, health, lang, iq);
        this.excited = 100;
    }

    train(){
        console.log(`I'm training on the following languages ${this.languages}`)
    }

    supported(target){
        target.health -= this.iq;
        console.log(`${this.name} supported ${target.name}, providing ${this.iq} of intelligence!`)
        console.log(`${target.name} now has ${target.health} health points`)
    }
}

const junDev1 = new JuniorDeveloper("Kat", 10, "Swift", 10);
const junDev2 = new JuniorDeveloper("Matt", 10, "Javascript", 10);

// junDev1.completedProjects("Super Ninja")
console.log(junDev1);
junDev1.supported(junDev2);