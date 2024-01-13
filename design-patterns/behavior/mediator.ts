interface Mediator {
  notify(sender: BaseComponent, event: string): void;
}

class ConcreteMediator implements Mediator {
  constructor(private c1: Component1, private c2: Component2) {
    this.c1.setMediator(this);
    this.c2.setMediator(this);
  }

  notify(sender: BaseComponent, event: string): void {
    if (event === "happy" && sender instanceof Component1) {
      console.log("Mediator handling happy event -> c2.sendSadMsg();");
      this.c2.sendSadMsg();
    }

    if (event === "sad" && sender instanceof Component2) {
      console.log("Mediator handling sad event -> c1.sendHappyMsg();");
      this.c1.sendHappyMsg();
    }
  }
}

class BaseComponent {
  constructor(protected mediator?: Mediator) {}

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  sendAngryMsg(to: string) {
    console.log("Angry msg to:", to);
  }
}

class Component1 extends BaseComponent {
  sendHappyMsg() {
    console.log("Component 1: Happy msg");
    this.mediator?.notify(this, "happy");
  }
}

class Component2 extends BaseComponent {
  sendSadMsg() {
    console.log("Component 2: Sad msg");
  }
}

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

c1.sendHappyMsg();
c2.sendSadMsg();
