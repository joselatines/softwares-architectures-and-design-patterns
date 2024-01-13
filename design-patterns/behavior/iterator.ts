interface Iterator<T> {
  current(): T;
  next(): T;
  key(): number;
  valid(): boolean;
  rewind(): void;
}

interface Aggregator {
  getIterator(): Iterator<string>;
}

class AlphabeticalOrderIterator implements Iterator<string> {
  private position: number = 0;

  constructor(private collection: string[], private reverse: boolean = false) {
    if (reverse) {
      this.position = collection.length - 1;
    }
  }

  rewind() {
    this.position = this.reverse ? this.collection.length - 1 : 0;
  }

  current(): string {
    return this.collection[this.position];
  }

  key(): number {
    return this.position;
  }

  next(): string {
    const item = this.collection[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  valid(): boolean {
    return this.reverse ? this.position >= 0 : this.position < this.collection.length;
  }
}

class WordsCollection implements Aggregator {
  private items: string[] = [];

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string): void {
    this.items.push(item);
  }

  getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this.items);
  }

  getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this.items, true);
  }
}

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
  console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
  console.log(reverseIterator.next());
}
