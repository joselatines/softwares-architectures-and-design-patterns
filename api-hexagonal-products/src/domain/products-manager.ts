import { IProductsRepository } from "./products-repository";
import { IProduct } from "./products.interface";

export class ProductsManager {
	constructor(private readonly productsRepository: IProductsRepository) {}
	async getAll() {
		const productsList = await this.productsRepository.getAll();
		return productsList;
	}

	async create(body: IProduct) {
		const productCreated = await this.productsRepository.create(body);
		return productCreated;
	}

	async delete(id: string) {
		const deleted = await this.productsRepository.delete(id);
		return deleted;
	}
}
