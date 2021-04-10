import Daemon from '../Daemon';

const daemon = new Daemon('Merlin');
test('daemon_1', () => {
    daemon.stoned = true;
    const result = 85;

    expect(daemon.attack).toEqual(result);
});

test('daemon_2', () => {
    //  без stoned
    const result = 90;

    expect(daemon.attack).toEqual(result);
});