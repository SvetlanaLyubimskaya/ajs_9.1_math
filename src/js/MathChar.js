import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type, health, level, attack = 100, defence, stoned = false, distanse = 1) {
    super(name, type, health, level, attack, defence);
    this.stoned = stoned; // дурман
    this.distanse = distanse;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    // линейное уравнение
    this._attack = 110 - this.distanse * 10;
    if(this.stoned) {
      this._attack -= Math.log2(this.distanse) * 5;
    }
    return this._attack > 0 ? Math.round(this._attack) : 0;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}
/*
Легенда
Мощь атаки магов и демонов привела к разбалансировке игрового мира.
Поэтому вы ввели для игроков несколько новых правил и возможностей:

Сила урона зависит от расстояния (для Magician, Daemon) - линейно падает,
а именно: на ближайшую клетку 100%, на 5 клетку от себя - 60%
(соответственно, на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%)
Возможность насылать «дурман» на магов и демонов.
При это их сила атаки падает уже не только линейно,
а по формуле: attack - log2(x) * 5,
где x - это расстояние в клетках.
attack рассчитывается с учётом п.1.
Пример: атака 100 единиц, атакуем 2 клетку от себя,
получаем вместе с дурманом: 85 (вместо 90).
Описание
Реализуйте классы Magician и Daemon с get/set stoned.
При этом get/set attack должен учитывать логику, описанную в легенде.

Подсказка: используйте класс Math и наследование, чтобы не дублировать код.
*/
