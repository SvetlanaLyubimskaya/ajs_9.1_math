import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.stoned = false; // дурман
    this.distanse = 1;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    // линейное уравнение
    let attack = (110 - this.distanse * 10) / 100 * this._attack;
    if(this.stoned) {
      attack -= Math.log2(this.distanse) * 5;
    }
    return attack > 0 ? Math.round(attack) : 0;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}
