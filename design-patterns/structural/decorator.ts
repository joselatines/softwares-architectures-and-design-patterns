abstract class Enemy {
  damage = 5;

  constructor() {}

  attack() {
    console.log("attack!", this.damage);
  }
}

abstract class EnemyDecorator extends Enemy {
  enemyDecorated: Enemy;

  constructor(enemyToDecorate: Enemy) {
    super();
    this.enemyDecorated = enemyToDecorate;
  }
}

class Freezer extends Enemy {
  constructor() {
    super();
  }

  attack() {
    console.log("Attack by freezer", this.damage * 2);
  }
}

class FirstTransformationDecorator extends EnemyDecorator {
  constructor(enemyToDecorate: Enemy) {
    super(enemyToDecorate);
    this.damage = this.enemyDecorated.damage * 3;
  }

  attack() {
    console.log("First Transformation Attack!", this.damage);
  }
}

class SecondTransformationDecorator extends EnemyDecorator {
  constructor(enemyToDecorate: Enemy) {
    super(enemyToDecorate);
    this.damage = this.enemyDecorated.damage * 4;
  }

  attack() {
    console.log("Second Transformation Attack!", this.damage);
  }
}

// Usage
const freezer = new Freezer();
freezer.attack();

const freezerLevel2 = new FirstTransformationDecorator(freezer);
freezerLevel2.attack();

const freezerLevel3 = new SecondTransformationDecorator(freezerLevel2);
freezerLevel3.attack();
