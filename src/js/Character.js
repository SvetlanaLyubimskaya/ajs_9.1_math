export default class Character {
  constructor(name, type, health, level, attack, defence, distanse) {
    this.name = name; // имя
    this.type = type; // тип
    this.health = health; // уровень жизни
    this.level = level; //  уровень персонажа
    this.attack = attack; // атака
    this.defence = defence; // защита
    this.distanse = distanse;
  }
}
