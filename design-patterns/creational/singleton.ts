class DatabaseManager {
	private static instance: DatabaseManager;
	private constructor() {}

	static getInstance(): DatabaseManager {
		if (!DatabaseManager.instance) {
			DatabaseManager.instance = new DatabaseManager();
		}

		return DatabaseManager.instance;
	}

	query(qry: string) {
		console.log(qry);
	}
}

const db1 = DatabaseManager.getInstance();
const db2 = DatabaseManager.getInstance();

if (db1 === db2)
	console.log("Singleton works, both variables contain same instance");
db1.query("SELECT * FROM products");
