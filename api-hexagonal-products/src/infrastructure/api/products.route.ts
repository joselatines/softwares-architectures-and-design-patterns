import { Router } from "express";
import { ProductsController } from "./products.controller";


export const productsRouter = Router();

productsRouter.get("/", ProductsController.getAll);
productsRouter.post("/", ProductsController.create);
productsRouter.delete("/:id", ProductsController.delete);
