import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name, type, health, level, attack, defence, distanse) {
    super(name, 'Daemon', health, level, attack, defence, distanse);
    this.attack = 25;
    this.distanse = 2;
  }
}
