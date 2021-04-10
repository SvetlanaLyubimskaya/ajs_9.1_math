import MathChar from './MathChar';

export default class Magician extends MathChar {
  constructor(name, type, health, level, attack, defence, distanse) {
    super(name, 'Magician', health, level, attack, defence, distanse);
  }
}
