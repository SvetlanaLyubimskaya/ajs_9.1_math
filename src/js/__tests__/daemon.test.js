import Daemon from '../Daemon';

// const daemon = new Daemon('Merlin');

test('daemon_1, with stoned, distanse=1', () => {
    const daemon = new Daemon('Pete', 'Daemon', 100, 1, 10, 40);

    daemon.stoned = true;
    const result = 10;

    expect(daemon.attack).toEqual(result);
});

test('daemon_2, without stoned, distanse=1', () => {
    const daemon = new Daemon('Pete', 'Daemon', 100, 1, 10, 40);

    daemon.stoned = false;//  без stoned
    const result = 10;

    expect(daemon.attack).toEqual(result);
});