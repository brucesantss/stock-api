import { Router } from "express";
import { createProduct, getProducts, findBySlug, changeProductByID, changeProductBySlug } from "../controller/productController";

const router = Router();

router
    .post('/product', createProduct)
    .get('/product', getProducts)
    .get('/product/:slug', findBySlug)
    .put('/product/id/:id', changeProductByID)
    .put('/product/slug/:slug', changeProductBySlug)

export default router;