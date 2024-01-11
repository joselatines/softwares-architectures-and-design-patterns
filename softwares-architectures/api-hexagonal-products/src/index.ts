import { Application, Request, Response } from "express";
import express = require("express");
import bodyParser = require("body-parser");
import { productsRouter } from "./infrastructure/api/products.route";

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Welcome to Express & TypeScript Server");
});

app.use("/products", productsRouter);

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
