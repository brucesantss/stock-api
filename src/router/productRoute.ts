import { Router } from "express";
import { createProduct, getProducts, findBySlug, changeProductByID } from "../controller/productController";

const router = Router();

router
    .post('/product', createProduct)
    .get('/product', getProducts)
    .get('/product/:slug', findBySlug)
    .put('/product/:id', changeProductByID)

export default router;