import { IProductsRepository } from "../../domain/products-repository";
import { IProduct } from "../../domain/products.interface";

let mockDb: IProduct[] = [];

export class InMemoryProductsRepository implements IProductsRepository {
	async getAll(): Promise<Array<Object>> {
		return mockDb;
	}

	async create(body: IProduct): Promise<IProduct | undefined> {
		mockDb.push({ ...body, id: crypto.randomUUID() });

		const added = mockDb.find(e => e.name === body.name);

		return added;
	}

	async delete(id: string): Promise<Boolean> {
		const productFound = mockDb.find(e => e.id === id);

		if (!productFound) return false;
		
		const newList = mockDb.filter(e => e.id !== id);
		mockDb = newList;
		const found = mockDb.find(e => e.id === id);

		if (found) return false;
		return true;
	}
}
