abstract class GameAI {
  // Template method
  playGame() {
    this.attack();
    this.speak();
    this.buildHouse();
    this.run();
  }

  attack() {
    console.log("Default attack!");
  }

  abstract speak(): void;

  abstract buildHouse(): void;

  run() {
    console.log("Default run");
  }
}

class AdvancedGameAI extends GameAI {
  // Overriding the attack method
  attack() {
    console.log("Advanced attack!");
  }

  // Implementing the abstract speak method
  speak() {
    console.log("Speaking advanced language");
  }

  // Implementing the abstract buildHouse method
  buildHouse() {
    console.log("Building advanced house");
  }
}

class SimpleGameAI extends GameAI {
  // Implementing the abstract speak method
  speak() {
    console.log("Speaking simple language");
  }

  // Implementing the abstract buildHouse method
  buildHouse() {
    console.log("Building simple house");
  }
}

// Example usage:

console.log("Advanced Game AI:");
const advancedGameAI = new AdvancedGameAI();
advancedGameAI.playGame();

console.log("\nSimple Game AI:");
const simpleGameAI = new SimpleGameAI();
simpleGameAI.playGame();
