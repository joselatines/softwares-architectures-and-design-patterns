class Receiver {
	printHappyMessage(msg: string) {
		console.log("Happy:", msg);
	}
}

interface Command {
	execute(): void;
}

class SimpleCommand implements Command {
	constructor(private payload: string) {}
	execute(): void {
		console.log("fire simple command. Payload:", this.payload);
	}
}

class ComplexCommand implements Command {
	constructor(protected receiver: Receiver, protected a: string) {}
	execute(): void {
		console.log("fire complex command:");
		this.receiver.printHappyMessage(this.a);
	}
}

class Invoker {
	fireCommand(command: Command) {
		command.execute();
	}

	showSadMessage(command: Command) {
		console.log("another function invoker");
		command.execute();
	}
}

const invoker = new Invoker();
const receiver = new Receiver();
const simpleCommand = new SimpleCommand("say hi!");
const complexCommand = new ComplexCommand(receiver, "Hello people");
invoker.fireCommand(simpleCommand);
invoker.fireCommand(complexCommand);
