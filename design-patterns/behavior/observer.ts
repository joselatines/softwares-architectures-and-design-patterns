interface INotifier {
  add(subscriber: ISubscriber): void;
  remove(subscriber: ISubscriber): void;
  notify(): void;
}

interface ISubscriber {
  update(): void;
}

class ConcreteNotifier implements INotifier {
  private subscribers: ISubscriber[] = [];

  add(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
  }

  remove(subscriber: ISubscriber): void {
    const index = this.subscribers.indexOf(subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  notify(): void {
    console.log("Notifying subscribers...");
    this.subscribers.forEach((subscriber) => {
      subscriber.update();
    });
  }
}

class ConcreteSubscriber implements ISubscriber {
  update(): void {
    console.log("Subscriber received an update!");
  }
}


const notifier = new ConcreteNotifier();

const subscriber1 = new ConcreteSubscriber();
const subscriber2 = new ConcreteSubscriber();

notifier.add(subscriber1);
notifier.add(subscriber2);

notifier.notify();


notifier.remove(subscriber1);

notifier.notify();
