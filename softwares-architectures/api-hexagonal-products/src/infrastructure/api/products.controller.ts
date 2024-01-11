import { Request, Response } from "express";
import { productsManager } from "../dependencies";
import { IProduct } from "../../domain/products.interface";

export class ProductsController {
	static async getAll(req: Request, res: Response) {
		const products = await productsManager.getAll();
		res.json({ products });
	}

	static async create(req: Request, res: Response) {
		const body: IProduct = req.body;
		const created = await productsManager.create(body);

		res.send(`Product was created: ${created ? true : false}`);
	}

	static async delete(req: Request, res: Response) {
		const id = req.params.id;
		const deleted = await productsManager.delete(id);

		res.send(`Product was deleted: ${deleted}`);
	}
}
