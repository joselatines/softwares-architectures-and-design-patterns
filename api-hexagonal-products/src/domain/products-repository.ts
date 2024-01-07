import { IProduct } from "./products.interface";

// repository = db implementation
export interface IProductsRepository {
	getAll: () => Promise<Array<any>>;
	create: (body: IProduct) => Promise<IProduct>;
	delete: (id: string) => Promise<Boolean>;
}
