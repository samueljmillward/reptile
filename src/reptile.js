function Reptile(species) {
    this.species = species
    this.age = 0;
};

Reptile.prototype.growUp = function () {
    this.age += 1;
};


module.exports = Reptile;