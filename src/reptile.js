function Reptile(species) {
    this.species = species
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;

};

Reptile.prototype.growUp = function () {
    this.age += 1;
    this.fitness -= 3;
    this.hunger += 5;
};

Reptile.prototype.walk = function () {
    if ((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    };
};
module.exports = Reptile;