import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Daemon', health, level, attack, defence);
  }
}
