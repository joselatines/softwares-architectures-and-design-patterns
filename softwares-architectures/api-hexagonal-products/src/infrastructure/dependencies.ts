import { ProductsManager } from "../domain/products-manager";
import { InMemoryProductsRepository } from "./repositories/in-memory.repository";
import { SQLiteProductsRepository } from "./repositories/sqlite.repository";

const sqliteRepository = new SQLiteProductsRepository();
// const productsRepository = new InMemoryProductsRepository(); Mock repository
export const productsManager = new ProductsManager(sqliteRepository);
