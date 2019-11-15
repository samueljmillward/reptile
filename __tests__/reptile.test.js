const Reptile = require('../src/reptile')

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Reptile('Iguana')).toBeInstanceOf(Object);
    });
    it('set species property', () => {
        const reptile = new Reptile('Iguana');
        expect(reptile.species).toEqual('Iguana')
    });
    it('set initial age to 0', () => {
        const reptile = new Reptile('Iguana');
        expect(reptile.age).toEqual(0);
    });
    it('set initial fitness to 10', () => {
        const reptile = new Reptile('Iguana');
        expect(reptile.fitness).toEqual(10);
    })
});
describe('aging function', () => {
    it('increments age by 1', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        expect(reptile.age).toEqual(1);
    });
    it('decrement fitness by 3', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        expect(reptile.fitness).toEqual(7);
    });
    it('increments hunger by 5', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        expect(reptile.hunger).toEqual(5);
    });
});
describe('walking function', () => {
    it('increments fitness by 4', () => {
        const reptile = new Reptile('Iguana');
        reptile.fitness = 4
        reptile.walk();
        expect(reptile.fitness).toEqual(8);
    });
    it('fitness cannot increase over 10', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        reptile.walk();
        expect(reptile.fitness).toEqual(10);
    });
});