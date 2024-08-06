import { Router } from "express";
import { createProduct, getProducts } from "../controller/productController";

const router = Router();

router
    .post('/product', createProduct)
    .get('/product', getProducts)

export default router;