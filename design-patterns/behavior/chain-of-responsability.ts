const USERNAME = "Cartman";
const DB = [USERNAME, "Kyle"];

interface Handler {
	handle(arg1: string): void;
	handleNext(arg1: string): void;
	setNextHandler(handler: Handler): Handler;
}

abstract class AbstractHandler implements Handler {
	protected nextHandler: Handler | null = null;

	abstract handle(txt: string): void;

	setNextHandler(nextHandler: Handler): Handler {
		this.nextHandler = nextHandler;
		return this;
	}

	handleNext(txt: string): void {
		if (this.nextHandler) {
			this.nextHandler.handle(txt);
		}
	}
}

class UsernameHandler extends AbstractHandler {
	handle(username: string): void {
		if (username !== USERNAME) {
			console.log("Username incorrect");
		} else {
			this.handleNext(username);
		}
	}
}

class DBHandler extends AbstractHandler {
	handle(username: string): void {
		if (!DB.includes(username)) {
			// stop
			console.log("Username is not in the database");
		} else {
			// next handler
			this.handleNext(username);
		}
	}
}

// setting handlers executions order
const handler = new UsernameHandler().setNextHandler(new DBHandler());

// executing
handler.handle(USERNAME);
// if nothing is shown in the console, all handlers were passed
