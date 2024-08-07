import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response) => {
    const { name, details, price, stock } = req.body;

    try {

        if(!name || !details || !price || !stock){
            return res.status(400).json({ message: 'todos os campos são obrigatório.' })
        }

        const existProduct = await prisma.product.findUnique({ where: {name} });
        if(existProduct){
            return res.status(400).json({ message: 'não pode existir o mesmo produto (nomes iguais).' })
        }

        const create = await prisma.product.create({
            data: {
                name,
                details,
                price,
                stock
            },
        });

        if(!create){
            return res.status(500).json({ message: 'não foi possível criar o produto.' })
        }

        return res.status(201).json({ message: 'produto criado.' })

    } catch (err) {
        console.log(err); 
        return res.status(500).json({ message: err })  
    }
}

export const getProducts = async (req: Request, res: Response) => {
    
    try {
        
        const products = await prisma.product.findMany();

        return res.status(200).json({ message: products })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'ocorreu um erro :(' })
    }
}

export const findBySlug = async (req: Request, res: Response) => {
    const { slug } = req.params;

    try {
        
        const product = await prisma.product.findUnique({ where: {name: slug} })
        if(!findBySlug){
            return res.status(404).json({ message: 'produto não encontrado :(' })
        }

        return res.status(200).json({ message: product })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'ocorreu um erro :(' })
    }
}