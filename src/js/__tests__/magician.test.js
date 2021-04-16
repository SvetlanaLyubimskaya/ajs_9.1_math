import Magician from '../Magician';

// const magician = new Magician('Pete');

test('Magician with stoned, distanse=2', () => {
    const magician = new Magician('Max', 'Magician', 100, 1, 25, 25);

    magician.stoned = true;
    const result = 18;

    expect(magician.attack).toEqual(result);
});

test('Magician without stoned, distanse=2', () => {
    const magician = new Magician('Max', 'Magician', 100, 1, 25, 25);

    magician.stoned = false; 
    const result = 23;

    expect(magician.attack).toEqual(result);
});