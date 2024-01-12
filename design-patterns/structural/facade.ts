interface Service {
	do(): void;
}
class Service1 implements Service {
	do() {
		console.log("service 1 working");
	}
}
class Service2 implements Service {
	do() {
		console.log("service 2 working");
	}
}

class Manager {
	protected serviceA: Service;
	protected serviceB: Service;
	constructor() {
		this.serviceA = new Service1();
		this.serviceB = new Service2();
	}
	build() {
		// executes business logic with multiple classes
		this.serviceA.do();
		this.serviceB.do();
		console.log("Built!");
	}
}

const manager = new Manager();

manager.build();
