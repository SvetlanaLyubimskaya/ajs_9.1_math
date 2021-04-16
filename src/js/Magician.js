import MathChar from './MathChar';

export default class Magician extends MathChar {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Magician', health, level, attack, defence);
    this.distanse = 2;
  }
}
