abstract class CContext {
	state: State;

	constructor(state: State) {
		this.state = state;
		this.state.setContext(this);
	}

	setState(state: State) {
		this.state = state;
		console.log("Current status:", state.constructor.name);
		state.setContext(this);
	}

	abstract request1(): void;

	abstract request2(): void;
}

class GameContext extends CContext {
	public request1(): void {
		this.state.play();
	}

	public request2(): void {
		this.state.showCharacter();
	}
}

abstract class State {
	context: CContext | null = null;

	setContext(context: CContext) {
		this.context = context;
	}

	abstract play(): void;

	abstract showCharacter(): void;
}

class GTA5State extends State {
	play(): void {
		console.log("Play GTA V");
	}

	showCharacter(): void {
		console.log("Show character camera in GTA V");
	}
}

class GTA4State extends State {
	play(): void {
		console.log("Play GTA 4");
	}

	showCharacter(): void {
		console.log("Show character camera in GTA 4");
	}
}

const gtav = new GTA5State();
const gta4 = new GTA4State();

const context = new GameContext(gtav);
context.request1();
context.request2();

context.setState(gta4);
context.request1();
context.request2();
