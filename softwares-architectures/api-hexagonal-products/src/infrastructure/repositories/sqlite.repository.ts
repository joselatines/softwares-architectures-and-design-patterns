import { Sequelize, DataTypes, Model } from "sequelize";
import { IProductsRepository } from "../../domain/products-repository";
import { IProduct } from "../../domain/products.interface";

export class SQLiteProductsRepository implements IProductsRepository {
	private sequelize: Sequelize;
	private Product: Model | any;

	constructor() {
		this.sequelize = new Sequelize({
			dialect: "sqlite",
			storage: "./sqlite.sqlite",
		});

		this.initializeDatabase();
		this.defineModel();
	}

	private async initializeDatabase(): Promise<void> {
		await this.sequelize.sync();
	}

	private defineModel(): void {
		this.Product = this.sequelize.define("Product", {
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.REAL,
				allowNull: false,
			},
		});
	}

	async getAll(): Promise<IProduct[]> {
		try {
			const products = await this.Product.findAll();
			return products.map((product: any) => product.toJSON());
		} catch (err) {
			console.error(err.message);
			return [];
		}
	}

	async create(body: IProduct): Promise<IProduct | undefined> {
		try {
			const createdProduct = await this.Product.create(body);
			return createdProduct.toJSON();
		} catch (err) {
			console.error(err.message);
			return undefined;
		}
	}

	async delete(id: string): Promise<boolean> {
		try {
			const deletedRows = await this.Product.destroy({
				where: {
					id: id,
				},
			});
			return deletedRows > 0;
		} catch (err) {
			console.error(err.message);
			return false;
		}
	}

	private async getProductById(id: string): Promise<IProduct | undefined> {
		try {
			const product = await this.Product.findByPk(id);
			return product?.toJSON();
		} catch (err) {
			console.error(err.message);
			return undefined;
		}
	}
}
