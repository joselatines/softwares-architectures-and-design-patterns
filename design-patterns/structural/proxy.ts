interface Db {
	getAll(): void;
}

class Database implements Db {
	getAll() {
		console.log(" get all items");
	}
}

class DbProxy implements Db {
	constructor(protected service: Db) {}
	getAll(): void {
		console.log(" proxy executing get all to service");
		this.service.getAll();
	}
}

const db = new Database();
const dbProxy = new DbProxy(db);

dbProxy.getAll()
