class Developer {
    constructor(name, health, lang, iq){
        this.name = name
        this.health = health
        this.lang = lang
        this.iq = iq
    }

    sleep(){
        console.log("Zzzzzzzz")
        this.iq += 5
        this.health += 10
        return this
    }

    completedProjects(title){
        console.log(`${this.name} completed a project named ${title}`)
        this.iq -= 2
        this.health -=4
        return this
    }
}

const dev1 = new Developer("Ruben")
const dev2 = new Developer("Kevin",10, 5)

console.log(dev2)
dev2.sleep()
console.log(dev2)
dev2.completedProjects("Javascript")

module.exports= Developer;