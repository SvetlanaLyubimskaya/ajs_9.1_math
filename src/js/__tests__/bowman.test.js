import Bowman from '../Bowman';

test('bowman_1', () => {
    const bowman = new Bowman('Tomas', 'Bowman', 100, 1, 25, 25);
    const result = 25;

    expect(bowman.attack).toEqual(result);
});