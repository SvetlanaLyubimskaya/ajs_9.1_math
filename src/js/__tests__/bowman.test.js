import Bowman from '../Bowman';

const bowman = new Bowman('Tomas');
test('bowman_1', () => {
    
    const result = 90;

    expect(bowman.attack).toEqual(result);
});