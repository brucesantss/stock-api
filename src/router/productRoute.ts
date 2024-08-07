import { Router } from "express";
import { createProduct, getProducts, findBySlug } from "../controller/productController";

const router = Router();

router
    .post('/product', createProduct)
    .get('/product', getProducts)
    .get('/product/:slug', findBySlug)

export default router;