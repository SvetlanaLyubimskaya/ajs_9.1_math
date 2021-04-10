import Character from './Character';

export default class Bowman extends Character {
    constructor(name, type, health, level, attack, defence, distanse) {
        super(name, 'Bowman', health, level, attack, defence, distanse);
    }
}