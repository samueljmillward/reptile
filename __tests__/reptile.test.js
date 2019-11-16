const Reptile = require('../src/reptile')

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Reptile('Iguana')).toBeInstanceOf(Object);
    });

    it('set species property', () => {
        const reptile = new Reptile('Iguana');
        expect(reptile.species).toEqual('Iguana');
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
    it('throws an error if the reptile is not alive', () => {
        const reptile = new Reptile('Iguana');
        reptile.hunger = 10;
        expect(() => reptile.feed()).toThrow('Catastrophic organ failure');
    });
});
describe('hunting function', () => {
    it('increments fitness by 4', () => {
        const reptile = new Reptile('Iguana');
        reptile.fitness = 4
        reptile.hunt();
        expect(reptile.fitness).toEqual(8);
    });
    it('fitness cannot increase over 10', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        reptile.hunt();
        expect(reptile.fitness).toEqual(10);
    });
    it('throws an error if the reptile is not alive', () => {
        const reptile = new Reptile('Iguana');
        reptile.fitness = 0;
        expect(() => reptile.feed()).toThrow('Catastrophic organ failure');
    });
});

describe('feeding function', () => {
    it('decrement hunger by 3', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        reptile.feed();
        expect(reptile.hunger).toEqual(2);
    });

    it('hunger cannot decrease below 0', () => {
        const reptile = new Reptile('Iguana');
        reptile.growUp();
        reptile.feed();
        reptile.feed();
        expect(reptile.hunger).toEqual(0);
    });

    it('throws an error if the reptile is not alive', () => {
        const reptile = new Reptile('Iguana');
        reptile.age = 30;
        expect(() => reptile.feed()).toThrow('Catastrophic organ failure');
    });
});
describe('basking function', () => {
    it('returns reptile body heat', () => {
        const reptile = new Reptile('Iguana');
        reptile.bask();
        expect(reptile.bodyHeat).toEqual(70);
    });

    it('body heat cannot decrease below 0', () => {
        const reptile = new Reptile('Iguana');
        reptile.hunt();
        reptile.hunt();
        reptile.hunt();
        expect(reptile.bodyHeat).toEqual(0);
    });
    it('body heat cannot increase above 100', () => {
        const reptile = new Reptile('Iguana');
        reptile.bask();
        reptile.bask();
        reptile.bask();
        expect(reptile.bodyHeat).toEqual(100);
    });
    /*it('throws an error if the reptile is not alive', () => {
        const reptile = new Reptile('Iguana');
        reptile.
    });*/
});
describe('assessHealth function', () => {
    it('returns reptile status', () => {
        const reptile = new Reptile('Iguana');
        reptile.hunger = 4
        reptile.fitness = 4
        reptile.assessHealth();
        expect(reptile.assessHealth()).toBe("Condition optimal. Recommend returning to safety")
    });

    it('returns reptile status', () => {
        const reptile = new Reptile('Iguana');
        reptile.hunger = 8;
        reptile.fitness = 1;
        reptile.assessHealth();
        expect(reptile.assessHealth()).toBe("Condition critical")
    });

    it('returns reptile status', () => {
        const reptile = new Reptile('Iguana');
        reptile.hunger = 6
        reptile.fitness = 4
        reptile.assessHealth();
        expect(reptile.assessHealth()).toBe("I must feed")
    });

    it('returns reptile status', () => {
        const reptile = new Reptile('Iguana');
        reptile.hunger = 4
        reptile.fitness = 1
        reptile.assessHealth();
        expect(reptile.assessHealth()).toBe("I must hunt")
    });
    it('returns reptile status', () => {
        const reptile = new Reptile('Iguana');
        reptile.bodyHeat = 90
        expect(reptile.assessHealth()).toBe("Approaching maximum body temperature")
    });
    it('returns reptile status', () => {
        const reptile = new Reptile('Iguana');
        reptile.bodyHeat = 10
        expect(reptile.assessHealth()).toBe("Approaching minimum body temperature")
    });
});