interface AccountPrototype {
	clone(): AccountPrototype;
	getWallet(): string;
}

class BankAccount implements AccountPrototype {
	constructor(private email: string) {}

	clone(): AccountPrototype {
		return this;
	}
	getWallet(): string {
		return this.email + "5d5d4d4d";
	}
}

const acc1 = new BankAccount("user@gmail.com");
const clonedAcc = acc1.clone();

console.log("Same?", acc1 === clonedAcc);
console.log({ acc1, clonedAcc });
