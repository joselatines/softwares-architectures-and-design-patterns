abstract class Client {
	speak(): void {
		console.log("abstract client");
	}

	isComposite(): boolean {
		return false;
	}
}

// Leaf Node
class NormalClient extends Client {
	speak(): void {
		console.log("normal client");
	}
}

// Leaf Node
class PremiumClient extends Client {
	speak(): void {
		console.log("premium client");
	}
}

// Composite Node
class CompositeClient extends Client {
	clients: Client[] = [];
	speak(): void {
		console.log("composite client");

		this.clients.forEach(e => e.speak());
		console.log(this.clients);
	}

	add(client: Client): void {
		this.clients.push(client);
	}

	remove(client: Client): void {
		const index = this.clients.indexOf(client);
		this.clients.splice(index, 1);
	}

	isComposite(): boolean {
		return true;
	}
}

const cl1 = new NormalClient();
const cl2 = new NormalClient();
const clPremium2 = new PremiumClient();
const clComposite = new CompositeClient();

cl1.speak();
clPremium2.speak();
clComposite.add(cl1);
clComposite.add(clPremium2);
console.log("all");
clComposite.speak();
clComposite.remove(clPremium2);
clComposite.speak();
