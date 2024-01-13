abstract class Context {
	private strategy: Strategy | null = null;
	setStrategy(strategy: Strategy) {
		this.strategy = strategy;
	}

	executeStrategy() {
		if (!this.strategy) return console.log("no strategy selected");
		this.strategy.executeAlgorithm();
	}
}

class AppContext extends Context {}

abstract class Strategy {
	abstract executeAlgorithm(): void;
}

class StrategyA extends Strategy {
	executeAlgorithm(): void {
		console.log("I am a algorithm");
	}
}

const appContext = new AppContext();
const strategyA = new StrategyA();
appContext.setStrategy(strategyA);
appContext.executeStrategy();
