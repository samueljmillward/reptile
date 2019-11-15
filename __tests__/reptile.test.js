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
});
describe('aging function', () => {
    it('increments age by 1', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        expect(reptile.age).toEqual(1);
    });
});