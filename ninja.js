class Ninja{
    constructor(name, health = 100, speed = 3, strength = 3, ){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(`My Ninja name is ${this.name}`)
    }

    logStats(){
        console.log(`Ninja ${this.name} has: 
        Health Points: ${this.health} 
        Speed Points: ${this.speed} 
        Strength Points: ${this.strength}`)
    }

    drinkSake(){
        this.health+=10
        return this
    }
}

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom=10){
        super(name, 200, 10, 10, 10, wisdom)
        this.widsom = wisdom
    }
    speakWisdom(){
        const drinkSake = super.drinkSake();
        console.log(`Sensei ${this.name} drinks Sake and now has ${this.health} health points. He wisely proclaims:`);
        console.log("When the student is ready the teacher will appear");
        return this
    }
}




const Sensei1 = new Sensei("Kevin")
Sensei1.speakWisdom()
console.log(Sensei1)
