interface IComponent {
	accept(visitor: IVisitor): void;
}
class ConcreteComponentA implements IComponent {
	accept(visitor: IVisitor): void {
		visitor.fooForComponentA(this);
	}

	doSomethingAwesomeA() {
		console.log("A Component awesome function");
	}
}

class ConcreteComponentB implements IComponent {
	accept(visitor: IVisitor): void {
		visitor.fooForComponentB(this);
	}

	doSomethingAwesomeB() {
		console.log("B Component awesome function");
	}
}

interface IVisitor {
	fooForComponentA(component: ConcreteComponentA): void;
	fooForComponentB(component: ConcreteComponentB): void;
}

class VisitorA implements IVisitor {
	fooForComponentA(component: ConcreteComponentA): void {
		component.doSomethingAwesomeA();
    console.log("-- COMPONENT A VISITED --")
	}

	fooForComponentB(component: ConcreteComponentB): void {
		component.doSomethingAwesomeB();
    console.log("-- COMPONENT B VISITED --")

	}
}

const cA = new ConcreteComponentA();
const cB = new ConcreteComponentB();

const collection = [cA, cB];

const amazingVisitorA = new VisitorA();

for (const component of collection) {
	component.accept(amazingVisitorA);
}
