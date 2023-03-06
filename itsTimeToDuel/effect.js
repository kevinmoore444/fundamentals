const Card = require("./card");
const Unit = require("./unit");

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

}



module.exports = Effect;