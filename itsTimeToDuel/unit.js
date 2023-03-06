// Import the other classes

const Card = require("./card");
const Effect = require("./effect");

// Creates the class of Unit including the pre-written attributes from card

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    // This method takes in two parameters which are specified when the function is called
    
    attack(target, effectCard){
        console.log(effectCard.text); //Logs the text which was defined in the text attribute of effect
        if (effectCard.stat == "res"){ 
            target.res += effectCard.magnitude
        } // using comparitive operator, if the stat (definited in effect object) is res, increase the targets res by the magnitude
        if (effectCard.stat == "power"){
            target.power += effectCard.magnitude
        } // if the stat is power 
        console.log(target)
        return this
    }

}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)


const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 3, "Reduce target's resilience by 2", "res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);


redBeltNinja.attack(redBeltNinja, hardAlgorithm);
blackBeltNinja.attack(redBeltNinja, unhandledPromiseRejection);
redBeltNinja.attack(redBeltNinja, pairProgramming);
redBeltNinja.attack(blackBeltNinja, pairProgramming);






module.exports = Unit;