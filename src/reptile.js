const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MINIMUM_BODYHEAT = 0;
const MAXIMUM_BODYHEAT = 100;
const MAXIMUM_CALCIUM = 100;
const MINIMUM_CALCIUM = 0;

function Reptile(species) {
    this.species = species;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.bodyHeat = 40;
    this.calciumLevel = 30;
};

Reptile.prototype.isAlive = function () {
    return this.age < 30 
    && this.hunger < 10 
    && this.fitness > 0 
    && this.bodyHeat < 100 
    && this.calciumLevel > 0;
}

Reptile.prototype.growUp = function () {
    if (!this.isAlive()) {
        throw new Error('DEATH: Catastrophic organ failure');
    };
    this.age += 1;
    this.fitness -= 3;
    this.hunger += 5;
    this.calciumLevel -= 20;
    if (this.calciumLevel < MINIMUM_CALCIUM) {
        this.calciumLevel = MINIMUM_CALCIUM;
    }; 
};

Reptile.prototype.hunt = function () {
    if (!this.isAlive()) {
        throw new Error('DEATH: Catastrophic organ failure');
    };
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
    if (this.bodyHeat >= 20) {
        this.bodyHeat -= 20;
    }
};

Reptile.prototype.feed = function () {
    if (!this.isAlive()) {
        throw new Error('DEATH: Catastrophic organ failure');
    };
    this.hunger -= 3;
    this.bodyHeat -= 10;
    this.calciumLevel += 3;
    if (this.hunger < MINIMUM_HUNGER) {
        this.hunger = MINIMUM_HUNGER
    };
    if (this.calciumLevel > MAXIMUM_CALCIUM) {
        this.calciumLevel = MAXIMUM_CALCIUM;
     };
    
};

Reptile.prototype.bask = function () {
    if (!this.isAlive()) {
        throw new Error('DEATH: Catastrophic organ failure');
    };
    this.bodyHeat += 30;
    if (this.bodyHeat < MINIMUM_BODYHEAT) {
        this.bodyHeat = MINIMUM_BODYHEAT;
    };
    if (this.bodyHeat > MAXIMUM_BODYHEAT) {
        this.bodyHeat = MAXIMUM_BODYHEAT;
    };
};

Reptile.prototype.nutrition = function () {
    if (!this.isAlive()) {
        throw new Error('DEATH: Catastrophic organ failure');
    };
    
};

Reptile.prototype.assessHealth = function () {
    if (this.fitness <= 3 && this.hunger >= 5) {
        return "Condition critical";
    };
    if (this.fitness <= 3) {
        return "I must hunt";
    };
    if (this.hunger >= 5) {
        return "I must feed";
    };
    if (this.bodyHeat >= 90) {
        return "Approaching maximum body temperature";
    };
    if (this.bodyHeat <= 10) {
        return "Approaching minimum body temperature";
    } else {
        return "Condition optimal. Recommend returning to safety";
    };
};

module.exports = Reptile;